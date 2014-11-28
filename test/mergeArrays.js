var expect = require('chai').expect;

// Write a test for a method that takes two arrays and merges them, returning one merged array.
// Then write the method that makes that test pass.

describe('#mergeArrays()', function() {
	it('takes two arrays and returns a merged array', function() {
		expect(mergeArrays([1, 2, 3],[4,5,6])).to.equal([1,2,3,4,5,6]);
	});
});

function mergeArrays(arr1,arr2){
	var newArray = arr1.concat(arr2);
	return newArray;
}