var expect = require('chai').expect;

// Write a test for a method that takes a string and return the second to last word of that string.
// Then write the method that will make that test pass.
describe('penultimateWord()', function() {
	it('returns the second to last word in the string', function() {
		expect(penultimateWord('Happy birthday')).to.equal('Happy');
		expect(penultimateWord('I need a job')).to.equal('a');
	});
});

var penultimateWord = function(string) {
	var words = string.split(' ');
	return words[words.length - 2];
}