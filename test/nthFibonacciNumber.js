var expect = require('chai').expect;

// Write a test for a method that takes a number n and returns the nth number of the Fibonacci sequence.
// Then write the test that will make that number pass.
describe('#fibonacci()', function() {
	it('takes a number n and returns the nth number of the sequence', function() {
		expect(fibonacci(3)).to.equal(1);
	});
});

var fibonacci = function(f) {
    var sum;
    var numbers = [0,1];
    
    for (var i = 1; i < f; i++) {
        sum = numbers[i] + numbers[i-1];
        
        numbers.push(sum);
    }
    return numbers[f-1];
};