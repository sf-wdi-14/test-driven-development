



var expect = require('chai').expect;

describe('#isPrime()', function() {
	it('returns true for a prime number', function() {
		expect(isPrime(5)).to.equal(true)
	});

	it('returns false for non-prime numbers', function() {
		expect(isPrime(4)).to.equal(false)
	});

	it('returns false for 1', function(){
		expect(isPrime(1)).to.equal(false)
	});
});

// Write the method that makes this test pass.
var isPrime= function(num){
	if(num < 2){
		return false;
	}
	for(i=2; i<=Math.sqrt(num); i++){
		if (num%i === 0){
			return false
		}
	}
	return true;
};
