# Kata Starters

A collection of minimal, self-contained project starters for common programming languages, designed for practicing Test-Driven Development (TDD) katas.

Each starter comes pre-configured with a working test suite and a simple example implementation that passes the tests. You can use these as a base to clone or copy into your own workspace when you want to tackle a new kata.

## Supported Languages

- [Go](./go)
- [JavaScript](./javascript)
- [Python](./python)
- [Ruby](./ruby)
- [Rust](./rust)
- [TypeScript](./typescript)

## How to Use

1. **Choose your language:** Navigate to the directory of your preferred language.
2. **Run the existing tests:** Ensure the provided example passes.
   - For Go: `go test ./...`
   - For JavaScript: `npm test`
   - (Check the individual `README.md` in each language folder for specific commands)
3. **Start your kata:**
   - Replace the example implementation with your actual logic.
   - Add new test cases to the existing test file or create a new one.
   - Run the tests frequently to follow the Red-Green-Refactor cycle.

## Adding New Languages

If you'd like to add a new language, please follow the pattern of the existing starters:
- Provide a minimal, working example.
- Include a test file that passes.
- Include a `README.md` with setup and run instructions.

