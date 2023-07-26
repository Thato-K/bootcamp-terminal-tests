const assert = require('assert');
const greet = require('../greet.js'); // Replace '../greet' with the correct path to your function module.

describe('greet function', function () {
  it('should greet Thato correctly', function () {
    assert.equal('Hello, Thato', greet('Thato'));
  });

  it('should greet Karen correctly', function () {
    assert.equal('Hello, Karen', greet('Karen'));
  });
});
