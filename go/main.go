package main

import "fmt"

// Sum adds two integers together.
func Sum(a, b int) int {
	return a + b
}

func main() {
	fmt.Println("Hello, Go!")
	fmt.Printf("2 + 3 = %d\n", Sum(2, 3))
}
