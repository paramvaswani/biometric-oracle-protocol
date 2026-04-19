export type BiometricProvider = "whoop" | "oura" | "garmin" | "apple_health" | "ultrahuman";
export type BiometricMetric = "recovery_score" | "hrv_rmssd" | "sleep_performance" | "sleep_hours" | "resting_heart_rate" | "strain" | "readiness_score" | "spo2" | "respiratory_rate" | "step_count" | "active_calories";
export interface BiometricWindow {
    start: string;
    end: string;
}
export interface BiometricClaim {
    metric: BiometricMetric;
    value: number;
    unit: string;
    timestamp: string;
    window: BiometricWindow;
    device: {
        provider: BiometricProvider;
        device_id: string;
        model?: string;
    };
    subject: {
        id: string;
        data_hash: string;
    };
}
export interface BiometricAttestation {
    provider_signature: string;
    provider_public_key: string;
    adapter_id: string;
    adapter_version: string;
    fetch_timestamp: string;
    nonce: string;
}
export interface SettlementMetadata {
    staleness_window_ms: number;
    confidence_score: number;
    dispute_window_ms: number;
    arbiter_address?: string;
}
export interface BiometricEnvelope {
    version: "BONP-1.0";
    claim: BiometricClaim;
    attestation: BiometricAttestation;
    settlement: SettlementMetadata;
}
export type DisputeStatus = "open" | "resolved_for_claimant" | "resolved_for_challenger" | "expired";
export interface DisputeRecord {
    envelope_id: string;
    challenger_id: string;
    challenge_evidence: BiometricEnvelope[];
    manual_attestation?: string;
    status: DisputeStatus;
    opened_at: string;
    resolved_at?: string;
    resolution_reason?: string;
}
export interface StalenessProof {
    envelope_id: string;
    claimed_timestamp: string;
    fetch_timestamp: string;
    max_age_ms: number;
    is_fresh: boolean;
    lag_ms: number;
}
export type BONPError = {
    code: "BONP-001";
    message: "Invalid envelope format";
} | {
    code: "BONP-002";
    message: "Signature verification failed";
} | {
    code: "BONP-003";
    message: "Stale data: outside staleness window";
} | {
    code: "BONP-004";
    message: "Replay detected: nonce already used";
} | {
    code: "BONP-005";
    message: "Provider authentication failed";
} | {
    code: "BONP-006";
    message: "Metric not supported by adapter";
} | {
    code: "BONP-007";
    message: "Dispute window expired";
} | {
    code: "BONP-008";
    message: "Insufficient confidence score";
};
//# sourceMappingURL=types.d.ts.map