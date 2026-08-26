# Python Kata Starter

A minimal, self-contained Python setup with a working example (`sum_numbers`)
and a passing test, ready for you to clear out and replace with your own kata.

**Prerequisites:** Python 3 and [uv](https://docs.astral.sh/uv/) installed (`uv --version` to check).

## Setup

```bash
uv sync
```

This creates a `.venv` and installs dependencies (pytest) automatically — no
separate virtual environment or `pip install` steps needed.

## Run

```bash
uv run python main.py
```

## Test

```bash
uv run pytest
```

## Files

- `main.py` — entry point + `sum_numbers(a, b)` example function
- `test_main.py` — pytest tests for `sum_numbers`
- `pyproject.toml` — project metadata + dependencies (pytest)
