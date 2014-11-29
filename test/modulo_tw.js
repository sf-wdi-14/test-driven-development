var expect = require('chai').expect;

describe('#modulo', function() {
	it('returns the modulo', function() {
		expect(modulo(14, 6)).to.equal(2);
		expect(modulo(19, 4)).to.equal(3);
	});
});

// Write a test for a method that takes two numbers, divides the first by the second number
// and returns the modulo of the result. Do not use % (JS's internal modulo).
// Then write the method that makes that test pass.
var modulo = function(num1, num2) {
	var quotient = Math.floor(num1 / num2);
	var remainder = num1 - (num2 * quotient);

	return remainder;
}