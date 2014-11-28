var expect = require('chai').expect;

// Write a test for a method that takes a string and return the second to last word of that string.
// Then write the method that will make that test pass.

describe('#penultimateWord()', function() {
	it('returns the second to last word in a string', function() {
		expect(longestWord("I want a prancing polkadotted pony")).to.equal("polkadotted");
	});
});

function penultimateWord (words) {
	
}