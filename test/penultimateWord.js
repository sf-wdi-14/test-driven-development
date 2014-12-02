var expect = require('chai').expect;

// Write a test for a method that takes a string and return the second to last word of that string.
// Then write the method that will make that test pass.
describe('penultimateWord', function() {
	it('returns the second to last word of a string', function() {
		expect("here's my whole string")to.equal("whole");
	});
};

var penultimateWord = function(string) {
	newString = string.split(" ");
	for(var i = 0; i < newString.length i++) {
		return newString.length - 1;
	}
};