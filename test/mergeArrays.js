var expect = require('chai').expect;

// Write a test for a method that takes two arrays and merges them, returning one merged array.
// Then write the method that makes that test pass.

describe('#merge()', function () {
  it('takes two arrays and merges them', function () {
    expect(merge([1,3,5,7], [2,4,6])).to.equal([1,3,5,7,2,4,6]);
  });
});

var merge = function (arr1,arr2) {
  newArray = [];
  
  for (var i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
  }
  for (var n = 0; n < arr2.length; n++) {
    newArray.push(arr2[n]);
  }
  
  return newArray;
}
merge([1,3,5,7],[2,4,6]);