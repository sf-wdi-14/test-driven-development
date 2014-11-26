var expect = require('chai').expect;

// Write a test for a method that takes two numbers, divides the first by the second number
// and returns the modulo of the result. Do not use % (JS's internal modulo).
// Then write the method that makes that test pass.

describe('#modulo()', function () {
	it('takes two numbers, divides the first by the second and returns the modulo', function() {
		expect(modulo(7,3)).to.equal(1);
	});
});

var modulo = function(num1,num2) {
    quotient = Math.floor(num1 / num2);
    remainder = num1 - (num2 * quotient);
    
    return remainder;
};