var expect = require('chai').expect;

// Write a test for a method that takes a number and then returns the sum of all the number's digits.
// Also test for the ability to pass in either a number as an integer, or as a string (e.g., 123 and '123'
// should both work).
// Then write the method that will make that test pass.

describe('sumOfDigits', function() {
	it('returns the sumOfDigits' function() {
		expect([1,2,3])to.equal(6);
	});
});

var sumOfDigits = function(number) {
	var count = 0;
	for (var i = 0; i < number; i++) {
		return i += count;
	}
};


