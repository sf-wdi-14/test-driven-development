var expect = require('chai').expect;

// Write a test for a method that takes a number and calculates its factorial value.
// Then write the method to make that test pass.
describe('#userNumber()', function() {
	it('calculates the userNumber factorial value', function() {
	});
});

var factorial = function(num)
{
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    var tmp = num;
    while (num-- > 2) {
        tmp *= num;
    }
    return tmp;
}

factorial(3)
