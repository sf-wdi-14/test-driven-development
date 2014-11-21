var expect = require('chai').expect;

describe('#nthFibonacciNumber()', function() {
	it('returns the nth number in the Fibonacci sequence', function() {
		expect(nthFibonacciNumber(4)).to.equal(2);
		expect(nthFibonacciNumber(6)).to.equal(5);
	});
});

var nthFibonacciNumber = function(n) {
	var numbers = [0, 1];

	for (var i = 2; i <= n; i++) {
		numbers.push(numbers[numbers.length - 2] + numbers[numbers.length - 1]);
	}

	return numbers[n - 1];
}
