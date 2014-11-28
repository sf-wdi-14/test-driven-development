var expect = require('chai').expect;

// Write a test for a method that returns the longest word of a string.
// Then write the method to make the test pass.

describe('#longestWord()', function() {
	it('returns the longest word in a string', function() {
		expect(longestWord("I want a prancing polkadotted pony")).to.equal("polkadotted");
	});
});

function longestWord (words) {
	var str = words.split(" ");
	var longest = 0;
	var word = null;
	for (var i = 0; i < str.length; i++) {
		if (longest < str[i].length);
		........
	};
}


// function longestWord (words) {
// 	words.split(" ");
// 	var newArray = words[0];
// 	for (var i = 0; i < words.length; i++) {
// 		if (words[i].length > newArray[i].length) {
// 			newArray = words[i];
// 		};
// 	};
// 	return words;
}