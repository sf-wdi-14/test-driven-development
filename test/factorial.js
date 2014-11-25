var expect = require('chai').expect;

var factorialValue= function(num){
	var factorial= 1;
	for (i=2; i<=num; i++){
		factorial *= i;
	}
	return factorial;
}



describe('#factorialValue()', function(){
	it('returns correct factorial for 3', function(){
		expect(factorialValue(3)).to.equal(6);
	});
	it('returns correct factorial for 6', function(){
		expect(factorialValue(6)).to.equal(720);
	});
});
// Write a test for a method that takes a number and calculates its factorial value.
// Then write the method to make that test pass.
