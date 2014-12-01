var expect = require('chai').expect;

// Write a test for a method that takes two arrays and merges them, returning one merged array.
// Then write the method that makes that test pass.

describe('#mergeArrays.js()', function(a,b) {
	it('returns one merged array for two input arrays', function() {
		expect(mergeArrays([1,2],[3,4])).to.equal([1,2,3,4])
			))}

var mergeArrays = function(array1,array2) {
	var array3 = array1.concat(array2);
	return array3;
};