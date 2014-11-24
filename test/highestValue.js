var expect = require('chai').expect;

describe('#highestValue()', function() {
	it('returns the highest value in an array', function() {
		expect(highestValue([1, 2, 3])).to.equal(3);
	});
});

// Write the method that makes this test pass.

var highestValue = function (arr) {
	highestNum = 0;

	for (var i = 0; i < arr.length ; i++) {
		var number = arr[i];
		if (number > highestNum) {
			highestNum = number;
		}
	}
	return highestNum;	
}