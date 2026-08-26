import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class SumTest {

    @Test
    void sumsTwoPositiveNumbers() {
        assertEquals(5, Main.sum(2, 3));
    }

    @Test
    void sumsWithNegativeNumbers() {
        assertEquals(0, Main.sum(-1, 1));
    }
}
