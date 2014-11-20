var expect = require('chai').expect;

describe('#reverseString()', function() {
	it('reverses a string', function() {
		expect(reverseString('Word')).to.equal('droW');
	});
});
