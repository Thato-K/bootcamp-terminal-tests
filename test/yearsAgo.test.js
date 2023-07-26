const assert = require('assert');
const yearsAgo = require('../yearsAgo.js');

describe('yearsAgo function', function() {
  it('should return the number of years passed from 1976 until now when passed with 1976', function() {
    const currentYear = new Date().getFullYear();
    const year = 1976;
    assert.equal(currentYear - year, yearsAgo(year), "This should be true");
  });

  it('should return the number of years passed from 2000 until now when passed with 2000', function() {
    const currentYear = new Date().getFullYear();
    const year = 2000;
    assert.equal(currentYear - year, yearsAgo(year), "This should be true");
  });
});