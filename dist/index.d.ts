export type { BiometricProvider, BiometricMetric, BiometricWindow, BiometricClaim, BiometricAttestation, SettlementMetadata, BiometricEnvelope, DisputeRecord, DisputeStatus, StalenessProof, BONPError, } from "./types.js";
export { createEnvelope, canonicalize, envelopeId, generateNonce, verifyEnvelope, _resetNonceRegistry, } from "./envelope.js";
export type { AdapterCapabilities, DateRange, FetchOptions, BiometricAdapter, } from "./adapter.js";
export { AdapterRegistry } from "./adapter.js";
export { openDispute, submitEvidence, resolveDispute, isDisputeExpired, adjudicate, } from "./dispute.js";
export { generateStalenessProof, checkFreshness, freshestValidEnvelope, } from "./staleness.js";
export { WhoopAdapter } from "./adapters/whoop.js";
export { OuraAdapter } from "./adapters/oura.js";
export { AppleHealthAdapter, fromHealthKitExport, parseHealthKitXml, } from "./adapters/apple-health.js";
export type { HealthKitReading } from "./adapters/apple-health.js";
//# sourceMappingURL=index.d.ts.map