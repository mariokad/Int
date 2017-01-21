// Given a listOfInts, find the highestProduct you can get from three of the integers.
// The input listOfInts will always have at least three integers.

// O(n) time and O(1) space

// function highestProduct(listOfInts) {
//   // can't use .sort(), since it increase time and space complexities
//   var sorted = listOfInts.slice(0).sort(function(a, b) {
//     return a - b;
//   });

//   var prod1 = sorted[0] * sorted[1] * sorted[sorted.length - 1];
//   var prod2 = sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3];

//   return Math.max(prod1, prod2);
// }


function highestProduct(listOfInts) {
  var high = Math.max(listOfInts[0], listOfInts[1]);
  var low = Math.min(listOfInts[0], listOfInts[1]);

  var highProd2 = listOfInts[0] * listOfInts[1];
  var lowProd2 = listOfInts[0] * listOfInts[1];

  var high3 = highProd2;

  for (var i = 2; i < listOfInts.length; i++) {
    high3 = Math.max(high3, highProd2 * listOfInts[i]);
    highProd2 = Math.max(highProd2, high * listOfInts[i]);
    lowProd2 = Math.min(lowProd2, low * listOfInts[i]);

    high = Math.max(high, listOfInts[i]);
    low = Math.min(low, listOfInts[i]);
  }

  return high3;
}

console.log(highestProduct([-10, -10, 1, 3, 2]));