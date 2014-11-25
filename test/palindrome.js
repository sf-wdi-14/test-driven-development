var expect = require('chai').expect;

// Write a function that checks if a string is a palindrome.

describe('#palindrome', function () {
	it('checks if a string is a palindrome', function () {
		expect(palindrome("level")).to.equal(true);
	});
	it('checks if a long string is a palindrome', function () {
		expect(palindrome("Sir I demand I am a maid named Iris")).to.equal(true);
	});
});

var palindrome = function(string) {
	reverse = "";
	newString = string.replace(" ", '');

	for (var a = 0; a < newString.length; a++) {
		if (newString[a] !== " ") {
		  reverse = newString[a] + reverse;	
		}

	}

	if (reverse === newString) {
		return true;
	} else {
		return false;
	}
}