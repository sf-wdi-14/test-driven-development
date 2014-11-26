var expect = require('chai').expect;

// Write a test for a method that takes two arrays and merges them, returning one merged array.
// Then write the method that makes that test pass.

var flatten = function (array) {
  newArray = [];
  
  for (var idx1 = 0; idx1 < array.length; idx1++) {
    if (Array.isArray(array[idx1])) {
      for (var idx2 = 0; idx2 < array[idx1].length; idx2++) {
        newArray.push(array[idx1][idx2]);
      }
    } else {
      newArray.push(array[idx1]);
    }
  }
  return newArray;
}