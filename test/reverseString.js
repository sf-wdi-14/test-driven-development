var expect = require('chai').expect;

describe('#reverseString()', function() {
	it('reverses a string', function() {
		expect(reverseString('Word')).to.equal('droW');
	});
});

// Write the method that will make this test pass.
var reverseString = function(s) {
	var l = s.length;
	var revString = "";
	for (i=l-1;i>=0;i--) {
		revString = revString + s[i];
	}
	return revString;
}
