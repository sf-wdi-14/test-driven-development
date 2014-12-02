var expect = require('chai').expect;

// Write a test for a method that returns the longest word of a string.
// Then write the method to make the test pass.

describe('#longestWord()', function() {
	it('finds and return the longest word of a string', function() {
		expect(longestWord("this string has several words")).to.equal("several");
	});
});

var longestWord = function(string) {
    var updatedString = string.split(" ")
    updatedString.sort(function(a, b) {
    return a.length < b.length;
	});
    return updatedString[0];
};
