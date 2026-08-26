# Go Kata Starter

A minimal, self-contained Go setup with a working example (`Sum`)
and a passing test, ready for you to clear out and replace with your own kata.

**Prerequisites:** Go installed (`go version` to check).

## Setup

No dependencies to install — Go's toolchain and standard library `testing`
package handle everything.

## Run

```bash
go run main.go
```

## Test

```bash
go test ./...
```

## Files

- `main.go` — entry point + `Sum(a, b int) int` example function
- `main_test.go` — tests for `Sum` using Go's built-in `testing` package
- `go.mod` — module definition
