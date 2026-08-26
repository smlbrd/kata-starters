function sum(a, b) {
  return a + b;
}

function main() {
  console.log("Hello, JavaScript!");
  console.log(`2 + 3 = ${sum(2, 3)}`);
}

if (require.main === module) {
  main();
}

module.exports = { sum };
