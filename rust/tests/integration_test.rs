use kata_starters_rust::sum;

#[test]
fn adds_two_numbers() {
    assert_eq!(sum(2, 3), 5);
}

#[test]
fn adds_negative_numbers() {
    assert_eq!(sum(-1, 1), 0);
}
