var expect = require('chai').expect;

// Write a test for a method that returns the longest word of a string.
// Then write the method to make the test pass.

var longestWord = function(myString) {
  words = myString.split(" ");
  longest = "";
 
  for (var word = 0; word < words.length ; word++) {
    if (words[word].length > longest.length) {
	longest = words[word]
    }
  }
  return longest;
}