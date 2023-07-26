const assert = require('assert');
const regCheck = require('../regCheck.js');

describe('reg check function', function() {
  it('It should return "true" when passed with "reg no that ends with town name"', function() {
    assert.equal(true, regCheck('DC 55 YU GP', 'GP'), "This should be true");
  });

  it('It should return "false" when passed with "reg no that is not from town"', function() {
    assert.equal(false, regCheck('5566 L', 'M'), "This should be false");
  });
});
