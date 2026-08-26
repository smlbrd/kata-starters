# Rust Kata Starter

A minimal, self-contained Rust setup with a working example (`sum`)
and passing tests, ready for you to clear out and replace with your own kata.

**Prerequisites:** Rust installed via [rustup](https://rustup.rs/) (`cargo --version` to check).

## Setup

No dependencies to install — Cargo's built-in test framework handles everything.

## Run

```bash
cargo run
```

## Test

```bash
cargo test
```

## Files

- `src/lib.rs` — `sum(a, b)` example function + inline unit tests
- `src/main.rs` — entry point, calls into the library
- `tests/integration_test.rs` — integration tests for `sum`
- `Cargo.toml` — package manifest (defines both a library and a binary target)

**Why a lib + bin split?** In Rust, code in `main.rs` isn't visible to files
in `tests/` — only a library crate (`lib.rs`) can be imported externally. So
`main.rs` stays a thin entry point, and `lib.rs` holds the logic you actually
want to test. This is idiomatic Rust project structure, not extra ceremony.
