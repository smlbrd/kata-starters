/// Adds two integers together.
pub fn sum(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn adds_two_numbers() {
        assert_eq!(sum(2, 3), 5);
    }

    #[test]
    fn adds_negative_numbers() {
        assert_eq!(sum(-1, 1), 0);
    }
}
