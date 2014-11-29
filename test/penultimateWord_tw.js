var expect = require('chai').expect;

describe('penultimateWord()', function() {
	it('returns the second to last word of a string', function() {
		expect(penultimateWord("How are you doing?")).to.equal("you");
		expect(penultimateWord("A B C D")).to.equal("C");
	});
});

// Write a test for a method that takes a string and return the second to last word of that string.
// Then write the method that will make that test pass.
var penultimateWord = function(string) {
	var sentence = string.split(' ');
	return sentence[sentence.length - 2];
}