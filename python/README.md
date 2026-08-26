# Python Kata Starter

A minimal, self-contained Python setup with a working example (`sum_numbers`)
and a passing test, ready for you to clear out and replace with your own kata.

**Prerequisites:** Python 3 installed (`python3 --version` to check).

## Setup

```bash
# 1. Create a virtual environment (keeps dependencies scoped to this folder)
python3 -m venv .venv

# 2. Activate it
source .venv/bin/activate        # macOS/Linux
.venv\Scripts\activate           # Windows

# 3. Install dependencies
pip install -r requirements.txt
```

## Run

```bash
python main.py
```

## Test

```bash
pytest
```

## Files

- `main.py` — entry point + `sum_numbers(a, b)` example function
- `test_main.py` — pytest tests for `sum_numbers`
- `requirements.txt` — dependencies (pytest)
