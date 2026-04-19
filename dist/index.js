// Envelope module
export { createEnvelope, canonicalize, envelopeId, generateNonce, verifyEnvelope, _resetNonceRegistry, } from "./envelope.js";
export { AdapterRegistry } from "./adapter.js";
// Dispute module
export { openDispute, submitEvidence, resolveDispute, isDisputeExpired, adjudicate, } from "./dispute.js";
// Staleness module
export { generateStalenessProof, checkFreshness, freshestValidEnvelope, } from "./staleness.js";
// Reference adapters
export { WhoopAdapter } from "./adapters/whoop.js";
export { OuraAdapter } from "./adapters/oura.js";
export { AppleHealthAdapter, fromHealthKitExport, parseHealthKitXml, } from "./adapters/apple-health.js";
//# sourceMappingURL=index.js.map