var expect = require('chai').expect;

// Write a test for a method that returns the longest word of a string.
// Then write the method to make the test pass.
describe('#longestWord()', function(){
	to('returns the longest word of a string') {
		expect(longestWord('i am home')).to.equal('home');
		expect(longestWord('tomorrow is tuesday')).to.equal('tomorrow');
	});
});

var longestWord = function(string) {
  var str = string.split(" ");
  var longest = 0;
  var word = null;
  for (var i = 0; i < str.length; i++) {
      if (longest < str[i].length) {
          longest = str[i].length;
          word = str[i];
      }
  }
  return word;
}
