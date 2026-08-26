# Java Kata Starter

A minimal, self-contained Java setup with a working example (`sum`)
and passing tests, ready for you to clear out and replace with your own kata.

**Prerequisites:** JDK 17+ and Maven installed (`java -version` and `mvn -version` to check).

## Setup

No dependencies to install — Maven will pull JUnit 5 automatically the first
time you run a command below.

## Run

```bash
java src/main/java/Main.java
```

This uses the [single-file source-code launcher](https://openjdk.org/jeps/330)
(available since Java 11), so there's no separate compile step.

## Test

```bash
mvn test
```

## Files

- `src/main/java/Main.java` — entry point + `sum(int a, int b)` example function
- `src/test/java/SumTest.java` — JUnit 5 tests for `sum`
- `pom.xml` — Maven project definition (JUnit 5 + Surefire plugin)
