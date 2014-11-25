var expect = require('chai').expect;


var penultimate= function(str){
	var strArr= str.split(' ');
	return strArr[strArr.length -2];
};


describe('#penultimate()', function(){
	it('correctly finds the second to last word in a string', function(){
		expect(penultimate('this is the sting you are testing')).to.equal('are');
	});
});

// Write a test for a method that takes a string and return the second to last word of that string.
// Then write the method that will make that test pass.
