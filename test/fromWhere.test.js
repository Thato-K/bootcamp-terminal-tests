const assert = require('assert');
const fromWhere = require('../fromWhere.js');

describe('fromWhere function', function() {
  it('should return Bellville, when passed with Bellville regNumber', function() {
    const result = fromWhere('CY 123');
    assert.strictEqual(result, 'Bellville');
  });

  it('should return "Paarl" for registration number from Paarl"', function() {
    const result = fromWhere('CJ 456');
    assert.strictEqual(result, 'Paarl');
  });

  it('should return "Cape Town" when passed with Cape Town Reg Number"', function() {
    const result = fromWhere('CA 789');
    assert.strictEqual(result, 'Cape Town');
  });

  it('should return "Some other place!" for other reg numbers', function() {
    const result = fromWhere('ND 246');
    assert.strictEqual(result, 'Some other place!');
  });
});
