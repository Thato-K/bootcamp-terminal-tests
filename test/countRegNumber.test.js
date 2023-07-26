const assert = require('assert');
const countRegNumber = require('../countRegNumber.js');

describe('countRegNumber function', function() {
  it('should return 3 for input "CA 123, CY 456, CJ 789"', function() {
    const result = countRegNumber('CA 123, CY 456, CJ 789');
    assert.strictEqual(result, 3);
  });

  it('should return 1 for input "ND 123"', function() {
    const result = countRegNumber('ND 123');
    assert.strictEqual(result, 1);
  });
});
