var expect = require('chai').expect;

describe ('#sumOfDigits()', function() {
	it('returns the sum of digits', function() {
		expect(sumOfDigits(123)).to.equal(6)
	});

	it('returns the sum of digits', function() {
		expect(sumOfDigits(456).to.equal(15));
	});
});

// Write a test for a method that takes a number and then returns the sum of all the number's digits.
// Also test for the ability to pass in either a number as an integer, or as a string (e.g., 123 and '123'
// should both work).
// Then write the method that will make that test pass.
var sumOfDigits = function(number) {
	var str = number.toString();
	var sum = 0;

	for (var i=0; i<str.length; i++)
	
}