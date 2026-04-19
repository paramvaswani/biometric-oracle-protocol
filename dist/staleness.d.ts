import type { BiometricEnvelope, StalenessProof } from "./types.js";
export declare function generateStalenessProof(envelope: BiometricEnvelope, now?: Date): StalenessProof;
export declare function checkFreshness(envelope: BiometricEnvelope, now?: Date): boolean;
/**
 * Given multiple envelopes for the same metric, returns the one with the
 * most recent claim timestamp that is still within its staleness window.
 * Throws if no fresh envelope exists.
 */
export declare function freshestValidEnvelope(envelopes: BiometricEnvelope[], now?: Date): BiometricEnvelope;
//# sourceMappingURL=staleness.d.ts.map