var expect = require('chai').expect;

// Write a test for a method that takes two numbers, divides the first by the second number
// and returns the modulo of the result. Do not use % (JS's internal modulo).
// Then write the method that makes that test pass.


describe('#modulo', function () {
	it('returns the modulo', function () {
		expect(modulo(20,6))
	})
})


var modulo = function(number1, number2) {
	var intResult = parseInt(number1/number2);
	var modulo = number1 = intResult * number2;
	return modulo;
}