const summation = (n) => {
  let type = typeof n;
  console.log("type", type);
  let sum = 0;

  if (type !== "number") {
    return "Please enter a positive integer";
  } else {
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
};

console.log(summation(5));

// Time-complexity of this method will be O(n) time because it is iterating over each integer from 1 to n.
