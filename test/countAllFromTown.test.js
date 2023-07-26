// const assert = require('assert');
// const countAllFromTown = require('../countAllFromTown.js');

// describe('countAllFromTown function', function () {
//   it('should return an array of registration numbers starting with "CA" from "CA 123, CY 456, CJ 789, CA 987"', function() {
//     const result = allFromTown('CA 123, CY 456, CJ 789, CA 987', 'CA');
//     assert.deepEqual(result, ['CA 123', 'CA 987']);
//   });

//   it('should return an empty array when there are no registration numbers starting with "ND" in "CA 123, CY 456, CJ 789, CA 987"', function() {
//     const result = allFromTown('CA 123, CY 456, CJ 789, CA 987', 'ND');
//     assert.deepEqual(result, []);
//   });

//   it('should return an empty array when the input string is empty', function() {
//     const result = allFromTown('', 'CA');
//     assert.deepEqual(result, []);
//   });
// });


// const assert = require('assert');
// const countAllFromTown = require('../countAllFromTown');

// describe('countAllFromTown function', function () {
//   it('should return the correct count', function () {
//     const regNumbers = ['CA 123', 'CA 456', 'CY 789'];
//     const town = 'CA';
//     const result = countAllFromTown(regNumbers, town);
//     assert.strictEqual(result, 2);
//   });

// });

const assert = require('assert');
const countAllFromTown = require('../countAllFromTown.js');

describe('countAllFromTown function', function() {
  it('should return 3 for input "CL 123, CY 456, CJ 789" and start "C"', function() {
    const result = countAllFromTown('CL 123, CY 456, CJ 789', 'C');
    assert.strictEqual(result, 3);
  });

  it('should return 1 for input "CL 123, CY 456, CJ 789" and start "CY"', function() {
    const result = countAllFromTown('CL 123, CY 456, CJ 789', 'CY');
    assert.strictEqual(result, 1);
  });

  it('should return 0 for input "CL 123, CY 456, CJ 789" and start "D"', function() {
    const result = countAllFromTown('CL 123, CY 456, CJ 789', 'D');
    assert.strictEqual(result, 0);
  });

  it('should throw an error when regNumbers is not a string', function() {
    assert.throws(
      () => countAllFromTown(123, 'C'),
      Error,
      'regNumbers should be a string'
    );
  });

  it('should handle empty regNumbers and return 0', function() {
    const result = countAllFromTown('', 'C');
    assert.strictEqual(result, 0);
  });
});
