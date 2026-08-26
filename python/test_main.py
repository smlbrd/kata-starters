from main import sum_numbers


def test_sum_numbers():
    assert sum_numbers(2, 3) == 5


def test_sum_numbers_with_negatives():
    assert sum_numbers(-1, 1) == 0
