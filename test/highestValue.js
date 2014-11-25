var expect = require('chai').expect;

describe('#highestValue()', function() {
	it('returns the highest value in an array', function() {
		expect(highestValue([1, 2, 3])).to.equal(3);
		expect(highestValue([5, 45, 12])).to.equal(45);
	});
});

// Write the method that makes this test pass.
var highestValue = function(array) {
	return Math.max.apply(Math, array);

}