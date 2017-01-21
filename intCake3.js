// Given a listOfInts, find the highestProduct you can get from three of the integers.
// The input listOfInts will always have at least three integers.

// O(n) time and O(1) space

function highestProduct(listOfInts) {
  // can't use .sort(), since it increase time and space complexities
  var sorted = listOfInts.slice(0).sort(function(a, b) {
    return a - b;
  });

  var prod1 = sorted[0] * sorted[1] * sorted[sorted.length - 1];
  var prod2 = sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3];

  return Math.max(prod1, prod2);
}

console.log(highestProduct([-1, 5, 2, 3, 10]))

function highestProduct(listOfInts) {
  
}