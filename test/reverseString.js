var expect = require('chai').expect;

var reverseString= function(str){
	return str.split('').reverse().join('');
}

describe('#reverseString()', function() {
	it('reverses a string', function() {
		expect(reverseString('Word')).to.equal('droW');
	});
});

// Write the method that will make this test pass.
