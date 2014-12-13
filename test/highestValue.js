var expect = require('chai').expect;

describe('#highestValue()', function() {
	it('returns the highest value in an array', function() {
		expect(highestValue([1, 2, 3])).to.equal(3);
	});
});

// Write the method that makes this test pass.
function highestValue (array){
	array.sort();
	var arrayLength = array.length;
	var highestNum = array[arrayLength-1];
	return highestNum;
}