var expect = require('chai').expect;


var nthFib= function(n){
	var finArr= [1,1]
	for(i=1; i<=n; i++){
		finArr.push(finArr[i]+finArr[i-1]);
	}
	return finArr[n];
}


describe('#nthFib()', function(){
	it('correctly returns the nth number of the Fibonacci sequence', function(){
		expect(nthFib(6)).to.equal(13);
	});
});



// Write a test for a method that takes a number n and returns the nth number of the Fibonacci sequence.
// Then write the test that will make that number pass.
