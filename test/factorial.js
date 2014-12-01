var expect = require('chai').expect;

// Write a test for a method that takes a number and calculates its factorial value.
// Then write the method to make that test pass.
//test

describe('factorial()', function() {
	it('returns the factorial of a number', function() {
		expect(factorial(3)).to.equal(6);
	});
});

// function

var factorial = function(x) {
	for(i=(x-1);i>1;i--) {x*=i}
	return x;
}