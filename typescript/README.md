# TypeScript Kata Starter

A minimal, self-contained TypeScript setup with a working example (`sum`)
and a passing test, ready for you to clear out and replace with your own kata.

**Prerequisites:** Node.js installed (`node --version` to check).

## Setup

```bash
pnpm install
```

## Run

```bash
pnpm start
```

## Test

```bash
pnpm test
```

## Files

- `main.ts` — entry point + `sum(a, b)` example function (exported for tests)
- `main.test.ts` — Vitest tests for `sum`
- `tsconfig.json` — TypeScript compiler config
- `package.json` — dependencies (TypeScript, ts-node, Vitest) and scripts
