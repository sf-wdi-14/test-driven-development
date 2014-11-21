var expect = require('chai').expect;

describe('#sumOfDigits()', function() {
	it('sums up all digits', function() {
		expect(sumOfDigits(123)).to.equal(6);
	});

	it('accepts a string as well', function() {
		expect(sumOfDigits('456')).to.equal(15);
	});
});

var sumOfDigits = function(number) {
	var str = number.toString();
  var sum = 0;

  for (var i = 0; i < str.length; i++) {
    sum += parseInt(str.charAt(i), 10);
  }

  return sum;
}
