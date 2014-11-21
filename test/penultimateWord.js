var expect = require('chai').expect;

describe('#penultimateWord()', function() {
	it('returns the second to last word', function() {
		expect(penultimateWord('this is me')).to.equal('is');
		expect(penultimateWord('one two three four')).to.equal('three');
	});
});

var penultimateWord = function(string) {
	var words = string.split(' ');
	return words[words.length - 2];
}
