var expect = require('chai').expect;

var longestWord= function(str){
	str= str.split(' ');
	var longest= '';
	for(i=0; i<str.length; i++){
		if (str[i].length > longest.length){
			longest= str[i];
		}
	}
	return longest;
};


describe('#longestWord()', function(){
	it('returns longest word in "how are you today"', function(){
		expect(longestWord('how are you today')).to.equal('today')
	});
});

// Write a test for a method that returns the longest word of a string.
// Then write the method to make the test pass.
