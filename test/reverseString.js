var expect = require('chai').expect;

describe('#reverseString()', function() {
	it('reverses a string', function() {
		expect(reverseString('Word')).to.equal('droW');
	});
});

// Write the method that will make this test pass.

var reverseString = function(string) {
	reversed = '';

	for (var a = 0; a < string.length; a++) {
		reversed = string[a] + reversed;
	}
	return reversed;
}