var expect = require('chai').expect;

// Write a test for a method that takes a number and calculates its factorial value.
// Then write the method to make that test pass.

describe('#factorial', function())

var factorial = function(num) {
  var product = num;
  for (var i = 1; i < num; i++) {
    product = i * product;
  }
  return product;
}