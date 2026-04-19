import type { BiometricEnvelope, DisputeRecord, DisputeStatus } from "./types.js";
export declare function openDispute(envelope: BiometricEnvelope, challengerId: string): DisputeRecord;
export declare function submitEvidence(dispute: DisputeRecord, counterEnvelopes: BiometricEnvelope[]): DisputeRecord;
export declare function resolveDispute(dispute: DisputeRecord, decision: "resolved_for_claimant" | "resolved_for_challenger", reason: string): DisputeRecord;
export declare function isDisputeExpired(dispute: DisputeRecord, disputeWindowMs: number): boolean;
/**
 * Heuristic adjudication:
 * If challenger evidence has higher confidence AND same provider → resolve for challenger.
 * If no evidence submitted → resolve for claimant.
 * Otherwise → needs manual review (returns "open").
 */
export declare function adjudicate(dispute: DisputeRecord, originalEnvelope: BiometricEnvelope): DisputeStatus;
//# sourceMappingURL=dispute.d.ts.map