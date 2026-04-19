import type { BiometricEnvelope, BiometricMetric } from "../types.js";
import type { BiometricAdapter, AdapterCapabilities, DateRange, FetchOptions } from "../adapter.js";
export interface HealthKitReading {
    type: string;
    value: number;
    unit: string;
    startDate: string;
    endDate: string;
    sourceName?: string;
    sourceVersion?: string;
    device?: string;
}
/**
 * Parse Apple Health XML export into HealthKit readings.
 * Handles the standard export.xml format produced by the Health app.
 */
export declare function parseHealthKitXml(xml: string): HealthKitReading[];
/**
 * Helper: load and parse an Apple Health XML export from disk.
 */
export declare function fromHealthKitExport(xmlPath: string): HealthKitReading[];
export declare class AppleHealthAdapter implements BiometricAdapter {
    readonly id = "bonp-apple-health-v1";
    readonly version = "1.0.0";
    readonly provider: "apple_health";
    private readings;
    /**
     * Load readings from a HealthKit export XML file or pre-parsed array.
     * Call before fetchMetric when using the export path.
     */
    loadExport(xmlPathOrReadings: string | HealthKitReading[]): this;
    getCapabilities(): AdapterCapabilities;
    getPublicKey(): string;
    fetchMetric(userId: string, metric: BiometricMetric, range: DateRange, options?: FetchOptions): Promise<BiometricEnvelope>;
    verifySignature(envelope: BiometricEnvelope): Promise<boolean>;
}
//# sourceMappingURL=apple-health.d.ts.map