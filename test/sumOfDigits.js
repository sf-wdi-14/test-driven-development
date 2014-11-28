var expect = require('chai').expect;

// Write a test for a method that takes a number and then returns the sum of all the number's digits.
// Also test for the ability to pass in either a number as an integer, or as a string (e.g., 123 and '123'
// should both work).
// Then write the method that will make that test pass.


describe('#sumOfDigits()', function(){
	it('returns the sum of a numbers digits', function(){
		expect(sumOfDigits(451)).to.equal(10);
	});
	it('returns the sum of a numbers digits if the number is submitted as a string', function(){
		expect(sumOfDigits('326')).to.equal(11);
	});
});


function sumOfDigits (num) {
	var total = 0;
	var tempNum = [];

	num.toString();
	tempNum = num.split('');
	for (var i = 0; i < tempNum.length; i++) {
		total+=parseInt(tempNum[i]);
	};
	return total;
}

// console.log(sumOfDigits);