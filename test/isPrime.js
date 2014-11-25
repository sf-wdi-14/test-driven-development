var expect = require('chai').expect;

describe('#isPrime()', function() {
	it('returns true for a prime number', function() {
		expect(isPrime(5)).to.equal(true)
	});

	it('return false for 1', function() {
		expect(isPrime(1)).to.equal(false)
	});

	it('returns false for non-prime numbers', function() {
		expect(isPrime(4)).to.equal(false)
	});
});

// Write the method that makes this test pass.
var isPrime = function(number) {
	if(number === 1) return false; 
		for (var i = 0; i < number/2; i++) {
		 	if(number % 2 == 0) return false;
}
		return true;
}