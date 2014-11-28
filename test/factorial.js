var expect = require('chai').expect;

// Write a test for a method that takes a number and calculates its factorial value.
// Then write the method to make that test pass.

describe('#factorial()', function (){
	it('returns the factorial value of a number', function (){
		expect(factorial(4)).to.equal(24);
		expect(factorial(5)).to.equal(120);
	})
})

var factorial = function (number) {
	product = 1;
	for (var i = 2; i <= number; i++) {
		product *=i;
	};
	return product;
}



// function factorial (number) {
// 	for (var i = number; i > 0; i--) {
// 		var product;
// 		product = number * (number-1);
// 	};
// 	return product;
// }