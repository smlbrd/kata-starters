export function sum(a: number, b: number): number {
  return a + b;
}

function main(): void {
  console.log("Hello, TypeScript!");
  console.log(`2 + 3 = ${sum(2, 3)}`);
}

if (require.main === module) {
  main();
}
