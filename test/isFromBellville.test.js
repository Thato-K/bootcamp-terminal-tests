const assert = require('assert');
const isFromBellville = require('../isFromBellville.js');

describe('isFromBellville function', function() {
  it('should return true when passed with a reg number starting with "CY"', function() {
    const result = isFromBellville('CY 123');
    assert.strictEqual(result, true);
  });

  it('should return false when passed with a reg number not starting with "CY"', function() {
    const result = isFromBellville('CA 456');
    assert.strictEqual(result, false);
  });

  it('should be case-sensitive and return false for a lowercase registration number', function() {
    const result = isFromBellville('cy 789');
    assert.strictEqual(result, false);
  });
});
