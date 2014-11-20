var expect = require('chai').expect;

describe('#isPrime()', function() {
	it('returns true for a prime number', function() {
		expect(isPrime(5)).to.equal(true)
	});

	it('returns false for non-prime numbers', function() {
		expect(isPrime(4)).to.equal(false)
	});
});
