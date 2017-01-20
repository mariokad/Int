// You have a list of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function get_products_of_all_ints_except_at_index() that takes a list of integers and returns a list of the products.

// For example, given:

//   [1, 7, 3, 4]

// your function would return:

//   [84, 12, 28, 21]

// by calculating:

//   [7*3*4, 1*3*4, 1*7*4, 1*7*3]

// Do not use division in your solution.

function getProductsOfAllIntsExceptAtIndex(int) {
  var products = new Array(int.length);
  console.log(products.length);
  var current = 0;
  var product = 1;

  while (current < int.length) {
    products[current] = product;
    product *= int[current];
    current += 1;
  }

  product = 1;
  current = int.length - 1;

  while(current >= 0) {
    products[current] *= product;
    product *= int[current];
    current -= 1;
  }

  return products;
}

var integers = [1, 7, 3, 4];
console.log(getProductsOfAllIntsExceptAtIndex(integers));

// expect:
// [84, 12, 28, 21]