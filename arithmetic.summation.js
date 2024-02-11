// arithmetic formula for summation: (n*(n+1))/2

const arithmeticSummation = (number) => {
  if (typeof number !== "number") {
    return "Please return a number";
  } else {
    return (number * (number + 1)) / 2;
  }
};

console.log(arithmeticSummation(5));

// The time complexity of this approach is by far the best which is O(1) I believe the function performs
// basic arithmetic operations only once without any iterations
