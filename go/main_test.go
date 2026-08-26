package main

import "testing"

func TestSum(t *testing.T) {
	got := Sum(2, 3)
	want := 5

	if got != want {
		t.Errorf("Sum(2, 3) = %d; want %d", got, want)
	}
}

func TestSumWithNegatives(t *testing.T) {
	got := Sum(-1, 1)
	want := 0

	if got != want {
		t.Errorf("Sum(-1, 1) = %d; want %d", got, want)
	}
}
