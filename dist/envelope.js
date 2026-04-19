import { createHash, randomBytes } from "crypto";
// In-memory nonce registry — swap for Redis in production
const usedNonces = new Set();
export function createEnvelope(claim, attestation, settlement) {
    return {
        version: "BONP-1.0",
        claim,
        attestation,
        settlement,
    };
}
export function canonicalize(envelope) {
    // Deterministic JSON: sorted keys, no extra whitespace
    return JSON.stringify(envelope, Object.keys(envelope).sort());
}
export function envelopeId(envelope) {
    return createHash("sha256").update(canonicalize(envelope)).digest("hex");
}
export function generateNonce() {
    return randomBytes(32).toString("hex");
}
export async function verifyEnvelope(envelope) {
    const errors = [];
    // 1. Version + structural check
    if (!envelope || envelope.version !== "BONP-1.0") {
        errors.push({ code: "BONP-001", message: "Invalid envelope format" });
        return { valid: false, errors };
    }
    const { claim, attestation, settlement } = envelope;
    if (!claim?.metric ||
        claim.value === undefined ||
        !claim.timestamp ||
        !claim.window?.start ||
        !claim.window?.end ||
        !claim.device?.provider ||
        !claim.subject?.id ||
        !claim.subject?.data_hash) {
        errors.push({ code: "BONP-001", message: "Invalid envelope format" });
    }
    if (!attestation?.adapter_id ||
        !attestation?.nonce ||
        !attestation?.fetch_timestamp ||
        !attestation?.provider_public_key) {
        errors.push({ code: "BONP-001", message: "Invalid envelope format" });
    }
    if (settlement?.staleness_window_ms === undefined ||
        settlement?.confidence_score === undefined ||
        settlement?.dispute_window_ms === undefined) {
        errors.push({ code: "BONP-001", message: "Invalid envelope format" });
    }
    if (errors.length > 0)
        return { valid: false, errors };
    // 2. Replay protection
    if (usedNonces.has(attestation.nonce)) {
        errors.push({
            code: "BONP-004",
            message: "Replay detected: nonce already used",
        });
    }
    else {
        usedNonces.add(attestation.nonce);
    }
    // 3. Staleness check
    const fetchTime = new Date(attestation.fetch_timestamp).getTime();
    const claimTime = new Date(claim.timestamp).getTime();
    const lagMs = fetchTime - claimTime;
    if (lagMs > settlement.staleness_window_ms) {
        errors.push({
            code: "BONP-003",
            message: "Stale data: outside staleness window",
        });
    }
    // 4. Confidence floor (0.5 minimum)
    if (settlement.confidence_score < 0.5) {
        errors.push({ code: "BONP-008", message: "Insufficient confidence score" });
    }
    // 5. Signature verification (adapter-signed; provider-native in v2)
    // For v1, we trust the adapter's self-attestation. A non-empty
    // provider_signature field is required but we cannot verify it without
    // the adapter's public key at verify time. Real verification happens
    // inside adapter.verifySignature().
    if (!attestation.provider_signature) {
        errors.push({ code: "BONP-002", message: "Signature verification failed" });
    }
    return { valid: errors.length === 0, errors };
}
/** Clear the nonce registry — test use only */
export function _resetNonceRegistry() {
    usedNonces.clear();
}
//# sourceMappingURL=envelope.js.map