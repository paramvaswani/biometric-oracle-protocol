import type { BiometricEnvelope, BiometricMetric } from "../types.js";
import type { BiometricAdapter, AdapterCapabilities, DateRange, FetchOptions } from "../adapter.js";
export declare class OuraAdapter implements BiometricAdapter {
    readonly id = "bonp-oura-v1";
    readonly version = "1.0.0";
    readonly provider: "oura";
    getCapabilities(): AdapterCapabilities;
    getPublicKey(): string;
    fetchMetric(userId: string, metric: BiometricMetric, range: DateRange, options?: FetchOptions): Promise<BiometricEnvelope>;
    verifySignature(envelope: BiometricEnvelope): Promise<boolean>;
}
//# sourceMappingURL=oura.d.ts.map