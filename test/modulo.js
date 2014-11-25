var expect = require('chai').expect;

var findModulo= function(num1,num2){
	return num1%num2
}

describe('#findModulo()', function(){
	it('returns correct modulo of 7 divided by 4', function(){
		expect(findModulo(7,4)).to.equal(3);
	});
});


// Write a test for a method that takes two numbers, divides the first by the second number
// and returns the modulo of the result. Do not use % (JS's internal modulo).
// Then write the method that makes that test pass.
