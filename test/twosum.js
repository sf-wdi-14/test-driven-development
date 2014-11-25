var expect = require('chai').expect;

// Write a function that sums two numbers.

describe('#twosum', function () {
	it('returns the sum of two numbers', function() {
		expect(twosum(3,2)).to.equal(5);
	});
	it('returns the sum of a positive and negative number', function () {
		expect(twosum(-2,3)).to.equal(1);
	});
});

var twosum = function(num1,num2) {
	sum = num1 + num2;
	return sum;
};