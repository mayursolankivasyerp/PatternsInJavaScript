function leftTrianglePattern(num) {
  // pattern variable carries the final pattern in string format
  let pattern = ""; // outer loop runs for `rows` no. of times
  for (let i = 0; i < num; i++) {
    // inner loop runs for i
    for (let j = 0; j <= i; j++) {
      pattern += 1;
    }
    // Add a new line character after contents of each line
    pattern += "\n";
  }
  console.log(pattern);
}
let number = 5;
leftTrianglePattern(5);
