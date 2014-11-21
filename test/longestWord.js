var expect = require('chai').expect;

describe('#longestWord()', function() {
	it('returns the longest word', function() {
		expect(longestWord('one two three')).to.eq('three');
		expect(longestWord('a bb ccc')).to.eq('ccc');
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
