const recursiveSummation = (number) => {
  if (typeof number !== "number") {
    return "Please enter a number";
  } else {
    // base case
    if (n <= 0) {
      return 0;
    }
    return n + recursiveSummation(number - 1);
  }
};

console.log(recursiveSummation(5));
