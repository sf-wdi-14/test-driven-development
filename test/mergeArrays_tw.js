var expect = require('chai').expect;

describe('#mergeArrays', function() {
	it('merges two arrays', function() {
		array1 = [1, 2, 3];
		array2 = [4, 5, 6];
		expect(JSON.stringify(mergeArrays(array1, array2))).to.equal('[1,2,3,4,5,6]');
	});
});

// Write a test for a method that takes two arrays and merges them, returning one merged array.
// Then write the method that makes that test pass.
var mergeArrays = function(array1, array2) {
	var merge = array1.concat(array2);
	return merge;
}
