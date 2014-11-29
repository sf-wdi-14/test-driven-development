var expect = require('chai').expect;

describe ('#longestWord()', function() {
	it ('returns the longest word in a string', function() {
		expect (longestWord('a ab abc')).to.equal("abc");
	})
});

// Write a test for a method that returns the longest word of a string.
// Then write the method to make the test pass.
var longestWord = function(string) {
	var str=string.split(" ");
	var longest=0;
	var word=null;
	for (var i=0; i < str.length; i++) {
		if (longest < str[i].length) {
			longest = str[i].length;
			word=str[i];
		}
	}
	return word;
};