const assert = require('assert');
const findItemsOver20 = require('../findItemsOver20.js');

describe('findItemsOver20 function', function() {
  const itemList = [
    { name: 'apple', qty: 10 },
    { name: 'banana', qty: 5 },
    { name: 'orange', qty: 15 },
    { name: 'grapes', qty: 20 },
    { name: 'pear', qty: 25 }
  ];

  it('should return items with quantity higher than 20', function() {
    const expectedResults = [
      { name: 'pear', qty: 25 }
    ];
    assert.deepStrictEqual(findItemsOver20(itemList), expectedResults);
  });

  it('should return an empty array if no item has a quantity higher than 20', function() {
    const result = findItemsOver20([{ name: 'cherry', qty: 10 }]);
    assert.deepStrictEqual(result, []);
  });

  it('should return all items when all quantities are higher than 20', function() {
    const expectedResults = [
      { name: 'apple', qty: 30 },
      { name: 'banana', qty: 22 },
      { name: 'orange', qty: 25 },
      { name: 'grapes', qty: 30 },
      { name: 'pear', qty: 25 }
    ];
    const itemListWithAllOver20 = [
      { name: 'apple', qty: 30 },
      { name: 'banana', qty: 22 },
      { name: 'orange', qty: 25 },
      { name: 'grapes', qty: 30 },
      { name: 'pear', qty: 25 }
    ];
    assert.deepStrictEqual(findItemsOver20(itemListWithAllOver20), expectedResults);
  });
});
