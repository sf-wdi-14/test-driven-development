var expect = require('chai').expect;

describe('#modulo()', function() {
	it('returns the modulo', function() {
		expect(modulo(20, 6)).to.equal(2);
	});
});

var modulo = function(number1, number2) {
	var intResult = parseInt(number1 / number2);
	var modulo = number1 - intResult * number2;
	return modulo;
}
