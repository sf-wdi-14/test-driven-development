var add = require('../methods/add.js');
var expect = require('chai').expect;

// Write a test for a method that takes a number n and returns the nth number of the Fibonacci sequence.
// Then write the test that will make that number pass.
describe("fibNumber", function(n) {
	it("returns the following number in the sequence", function() {
		expect(6)to.equal(8);
	})}
});

var fib = function(n) {
	return n < 2 ? n : fib(n - 1) + fib(n - 2);
};