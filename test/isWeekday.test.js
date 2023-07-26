const assert = require('assert');
const isWeekday = require('../isWeekday.js');

describe('isWeekday function', function() {
  it('should return false when passed with weekend day', function() {
    const result = isWeekday('Saturday');
    assert.strictEqual(result, false);
  });

  it('should return true when passed with a week day', function() {
    const result = isWeekday('Tuesday');
    assert.strictEqual(result, true);
  });

  it('should return false for an invalid day of the week', function() {
    const result = isWeekday('InvalidDay');
    assert.strictEqual(result, false);
  });
});
