var expect = require('chai').expect;

var highestValue= function(arr){
	var highest=  arr.sort(function(a,b){return a-b}).pop();
	return highest
};

describe('#highestValue()', function() {
	it('returns the highest value in an array', function() {
		expect(highestValue([1, 2000000, 3000])).to.equal(2000000);
	});
});

// Write the method that makes this test pass.
