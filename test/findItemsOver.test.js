const assert = require('assert');
const findItemsOver = require('../findItemsOver.js');

describe('findItemsOver function', function() {
  const itemList = [
    { name: 'apple', qty: 10 },
    { name: 'banana', qty: 5 },
    { name: 'orange', qty: 15 },
    { name: 'grapes', qty: 20 },
    { name: 'pear', qty: 8 }
  ];

  const itemList2 = [
    { name: 'strawberry', qty: 30 },
    { name: 'mango', qty: 25 },
    { name: 'kiwi', qty: 18 },
    { name: 'pineapple', qty: 22 },
    { name: 'watermelon', qty: 12 }
  ];

  it('should return products that have quantity higher than the threshold', function() {
    const expectedResults = [
      { name: 'grapes', qty: 20 }
    ];
    assert.deepEqual(findItemsOver(itemList, 20), expectedResults);
  });  

  it('should return all the second item list', function() {
    const expectedResults = [
      { name: 'strawberry', qty: 30 },
      { name: 'mango', qty: 25 },
      { name: 'pineapple', qty: 22 }
    ];
    assert.deepEqual(findItemsOver(itemList2, 20), expectedResults);
  });
});
