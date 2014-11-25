var expect = require('chai').expect;


var sumDigits= function(num){
	var total= 0;
	var numArr= String(num).split('');
	for(i=0; i<numArr.length; i++){
		total += Number(numArr[i]);
	}
	return total
};


describe('#sumDigits()', function(){
	it('correctly finds sum of all the digits in the number when inputted as number', function(){
		expect(sumDigits(123)).to.equal(6);
	});
	it('correctly finds sum of all the digits in the number when inputted as a string', function(){
		expect(sumDigits('123')).to.equal(6);
	});
});


// Write a test for a method that takes a number and then returns the sum of all the number's digits.
// Also test for the ability to pass in either a number as an integer, or as a string (e.g., 123 and '123'
// should both work).
// Then write the method that will make that test pass.
