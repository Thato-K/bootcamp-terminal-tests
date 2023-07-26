const assert = require('assert');
const countAllPaarl = require('../countAllPaarl.js');
describe('countAllPaarl function', function() {
  it('should return an array with 2 registration numbers for input "CJ 123, CY 456, CJ 789"', function() {
    const result = countAllPaarl('CJ 123, CY 456, CJ 789');
    assert.deepStrictEqual(result, ['CJ 123', 'CJ 789']);
  });

  it('should return an empty array when there are no Paarl registration numbers', function() {
    const result = countAllPaarl('CA 123, CY 456');
    assert.deepStrictEqual(result, []);
  });
});

