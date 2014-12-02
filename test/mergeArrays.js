var expect = require('chai').expect;
var add = require('../methods/add.js');

// Write a test for a method that takes two arrays and merges them, returning one merged array.
// Then write the method that makes that test pass.

describe('merges two arrays', function(array1, array2) {
	it("merges both arrays and returns a single array", function() {
		expect([1,2,3]+["pardo","is","best"])to.equal([1,2,3,"pardo","is","best"]);
	});
});

var arrayMerger = function(array1, array2) {
    var finalArray = array1.concat(array2);
    return finalArray;
};
