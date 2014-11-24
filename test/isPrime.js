var expect = require('chai').expect;

describe('#isPrime()', function() {
	it('returns true for a prime number', function() {
		expect(isPrime(5)).to.equal(true)
	});
	it("returns true for a large prime number", function(){
		expect(isPrime(961748941)).to.equal(true)
	});

	it('returns false for non-prime numbers', function() {
		expect(isPrime(4)).to.equal(false)
	});

	it("returns false for 1", function(){
		expect(isPrime(1)).to.equal(false)
	});
});

// Write the method that makes this test pass.
var isPrime = function(num){
	if (isNaN(num) || !isFinite(num) || num%1 || num<2 || num===1) return false;
	else if (num%2===0) {
		console.log(2);
		return false;
	} else if (num%3===0) {
		console.log(3);
		return false;
	} else if (num>5 && num%5===0) {
		console.log(5);
		return false;
	} else {
		var square = Math.sqrt(num);
		for (var i = 5; i < square; i++) {
			if (num%i===0) {
				console.log(i);
				return false;
			};
		};
	}
	console.log(num+" is prime!");
	return true;
};