var expect = require('chai').expect;

describe('#highestValue()', function() {
	it('returns the highest value in an array', function() {
		expect(highestValue([1, 2, 3])).to.equal(3);
	});
});

// Write the method that makes this test pass.
var array = [2,15,3,17,25,12]
var highestValue = function(array){
	var l = array.length;
	var hV = 0;
	for (i=1;i<l;i++) {
		if (array[i] >= array[i-1]) {
			hV = array [i];
	}
	else { 
		hV = array[i-1];
	}
	}
	return hV;
}
highestValue(array);

// var array = [2,15,3,18,12];
// highestValue(array);