var expect = require('chai').expect;

var mergeArrays= function(arr1, arr2){
	return arr1.concat(arr2).join('');
}

//would take out .join() method if actually want returned as an array


describe('#mergeArrays()', function(){
	it('returns merged arrays correctly', function(){
		expect(mergeArrays([1,2,3],[4,5,6])).to.equal('123456')
	});
});

// Write a test for a method that takes two arrays and merges them, returning one merged array.
// Then write the method that makes that test pass.
