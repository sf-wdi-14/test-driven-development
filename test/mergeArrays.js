var expect = require('chai').expect;

describe('#mergeArrays', function() {
	it('merges two arrays', function() {
		array1 = [1, 2, 3];
		array2 = [4, 5, 6];
		expect(mergeArrays(array1, array2)).to.be.instanceof(Array)
		expect(JSON.stringify(mergeArrays(array1, array2))).to.equal('[1,2,3,4,5,6]');
	});
});

var mergeArrays = function(array1, array2) {
	var merge = Array.prototype.concat(array1, array2);

	merge = merge.reverse().filter(function (e, i, merge) {
	    return merge.indexOf(e, i+1) === -1;
	}).reverse();

	return merge;
}
