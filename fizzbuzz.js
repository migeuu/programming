function checkRemainder(i, divisible, expression) {
  if (i % divisible === 0) {
    output += expression;
  }
}

for (let i = 1; i <= 100; i++) {
  var output = "";
  checkRemainder(i, 3, "fizz");
  checkRemainder(i, 5, "buzz");
  checkRemainder(i, 7, "bazz");

  console.log(output || i);
}
