var expect = require('chai').expect;

describe('#factorial()', function() {
	it('calculates the factorial', function() {
		expect(factorial(3)).to.equal(6);
		expect(factorial(5)).to.equal(120);
	});
});

var factorial = function(number) {
	product = 1;

	for (var i = 2; i <= number; i++) {
		product *= i;
	}

	return product;
}
