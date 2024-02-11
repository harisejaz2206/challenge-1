const recursiveSummation = (number) => {
  if (typeof number !== "number") {
    return "Please enter a number";
  } else {
    // base case: if number reaches zero, return 0 (we have reached where we want)
    if (n <= 0) {
      return 0;
    }
    // recursive case: summing the current number (n) with previous number (n-1)
    return n + recursiveSummation(number - 1);
  }
};

console.log(recursiveSummation(5));

/* 
Time complexity of this approach is also O(n) because if you see the function decrements the value of "number" 
by 1 until it reaches the base case where n is 0 or less than 0 so it makes n recursively calls
*/
