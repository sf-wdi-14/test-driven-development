var expect = require('chai').expect;

describe('#highestValue()', function() {
	it('returns the highest value in an array', function() {
		expect(highestValue([1, 2, 3])).to.equal(3);
	});
});

var highestValue = function(array) {
	return Math.max.apply(Math, array);
}
