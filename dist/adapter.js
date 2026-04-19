export class AdapterRegistry {
    adapters = new Map();
    register(adapter) {
        this.adapters.set(adapter.provider, adapter);
    }
    get(provider) {
        return this.adapters.get(provider);
    }
    list() {
        return Array.from(this.adapters.values());
    }
    has(provider) {
        return this.adapters.has(provider);
    }
}
//# sourceMappingURL=adapter.js.map