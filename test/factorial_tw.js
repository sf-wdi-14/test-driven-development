var expect = require('chai').expect;

describe('#factorial()', function() {
	it('returns the factorial value of a number', function() {
		expect(factorial(4)).to.equal(24);
	});
});

// Write a test for a method that takes a number and calculates its factorial value.
// Then write the method to make that test pass.
var factorial = function(number) {
	var product = 1;

	for (var i = 2; i <=number; i++) {
		product *= i;
	}

	return product;
}