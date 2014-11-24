var expect = require('chai').expect;

describe('#reverseString()', function() {
	it('reverses a string', function() {
		expect(reverseString('Word')).to.equal('droW');
	});
});

// Write the method that will make this test pass.
function reverseString(word){
	word = word.split("");
	word.reverse();
	return word.toString("");
}