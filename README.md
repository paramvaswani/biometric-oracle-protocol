# BONP — Biometric Oracle Network Protocol

**BONP-1** is a standard for wrapping consumer biometric device data (Whoop, Oura, Apple Health) as cryptographically attested settlement oracles in prediction markets and commitment contracts.

## What's in this repo

| Path            | Description                                   |
| --------------- | --------------------------------------------- |
| `SPEC.md`       | Formal protocol specification (EIP-style)     |
| `src/`          | TypeScript SDK                                |
| `src/adapters/` | Reference adapters: Whoop, Oura, Apple Health |
| `docs/`         | Static documentation site                     |
| `examples/`     | Settlement and dispute flow examples          |

## Install

```bash
pnpm add @bonp/sdk
```

## Quick start

```typescript
import {
  WhoopAdapter,
  AdapterRegistry,
  verifyEnvelope,
  generateStalenessProof,
} from "@bonp/sdk";

const registry = new AdapterRegistry();
registry.register(new WhoopAdapter());

const envelope = await registry
  .get("whoop")!
  .fetchMetric(
    userId,
    "recovery_score",
    { start: new Date("2026-04-19"), end: new Date("2026-04-20") },
    { access_token: whoopToken },
  );

const { valid } = await verifyEnvelope(envelope);
const proof = generateStalenessProof(envelope);
```

## Build

```bash
pnpm install
pnpm build
```

## License

MIT © 2026 Param Vaswani
