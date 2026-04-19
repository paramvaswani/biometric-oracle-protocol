import type { BiometricEnvelope, BiometricClaim, BiometricAttestation, SettlementMetadata, BONPError } from "./types.js";
export declare function createEnvelope(claim: BiometricClaim, attestation: BiometricAttestation, settlement: SettlementMetadata): BiometricEnvelope;
export declare function canonicalize(envelope: BiometricEnvelope): string;
export declare function envelopeId(envelope: BiometricEnvelope): string;
export declare function generateNonce(): string;
export declare function verifyEnvelope(envelope: BiometricEnvelope): Promise<{
    valid: boolean;
    errors: BONPError[];
}>;
/** Clear the nonce registry — test use only */
export declare function _resetNonceRegistry(): void;
//# sourceMappingURL=envelope.d.ts.map