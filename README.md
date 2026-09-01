# Kata Starters

A collection of minimal, self-contained project starters for common programming languages, designed for practicing Test-Driven Development (TDD) katas.

Each starter comes pre-configured with a working test suite and a simple example implementation that passes the tests. You can use these as a base to clone or copy into your own workspace when you want to tackle a new kata.

## Supported Languages

- [Go](./go)
- [Java](./java)
- [JavaScript](./javascript)
- [Python](./python)
- [Ruby](./ruby)
- [Rust](./rust)
- [TypeScript](./typescript)

## How to Use

1. **Choose your language** and `cd` into its directory.
2. **Install dependencies** (if any) and **run the existing tests** to confirm the starter works, using the commands below.
3. **Start your kata:**
   - Replace the example implementation with your actual logic.
   - Add new test cases to the existing test file or create a new one.
   - Run the tests frequently to follow the Red-Green-Refactor cycle.

### Quick Reference

| Language | Install | Run | Test |
|---|---|---|---|
| [Go](./go) | *(none needed)* | `go run main.go` | `go test ./...` |
| [Java](./java) | *(none needed)* | `java src/main/java/Main.java` | `mvn test` |
| [JavaScript](./javascript) | `pnpm install` | `pnpm start` | `pnpm test` |
| [Python](./python) | `uv sync` | `uv run python main.py` | `uv run pytest` |
| [Ruby](./ruby) | `bundle install` | `ruby main.rb` | `bundle exec rspec` |
| [Rust](./rust) | *(none needed)* | `cargo run` | `cargo test` |
| [TypeScript](./typescript) | `pnpm install` | `pnpm start` | `pnpm test` |

Check the individual `README.md` in each language folder for prerequisites and more detail.

## Adding New Languages

If you'd like to add a new language, please follow the pattern of the existing starters:
- Provide a minimal, working example.
- Include a test file that passes.
- Include a `README.md` with setup and run instructions.

