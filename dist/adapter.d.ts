import type { BiometricMetric, BiometricProvider, BiometricEnvelope } from "./types.js";
export interface AdapterCapabilities {
    metrics: BiometricMetric[];
    max_lookback_days: number;
    supports_real_time: boolean;
    signature_scheme: "adapter_ed25519" | "provider_native";
}
export interface DateRange {
    start: Date;
    end: Date;
}
export interface FetchOptions {
    access_token?: string;
}
export interface BiometricAdapter {
    readonly id: string;
    readonly version: string;
    readonly provider: BiometricProvider;
    getCapabilities(): AdapterCapabilities;
    fetchMetric(userId: string, metric: BiometricMetric, range: DateRange, options?: FetchOptions): Promise<BiometricEnvelope>;
    verifySignature(envelope: BiometricEnvelope): Promise<boolean>;
    getPublicKey(): string;
}
export declare class AdapterRegistry {
    private readonly adapters;
    register(adapter: BiometricAdapter): void;
    get(provider: BiometricProvider): BiometricAdapter | undefined;
    list(): BiometricAdapter[];
    has(provider: BiometricProvider): boolean;
}
//# sourceMappingURL=adapter.d.ts.map