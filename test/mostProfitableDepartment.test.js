const assert = require('assert');
const mostProfitableDepartment = require('../mostProfitableDepartment.js'); // Import the function to be tested

describe('mostProfitableDepartment function', function() {
  const salesData = [
    { department: 'Clothing', sales: 100 },
    { department: 'Clothing', sales: 200 },
    { department: 'Clothing', sales: 150 },
    { department: 'Electronics', sales: 50 },
    { department: 'Electronics', sales: 300 },
    { department: 'Electronics', sales: 75 },
  ];

    it('It should return "outdoor", when passed with outdoor(department) ' , function(){
        assert.equal(null, mostProfitableDepartment('outdoor'), "This should be true");
    });
    
    it('It should return "electronics", when passed with electronics department ' , function(){
        assert.equal(null, mostProfitableDepartment('electronics'), "This should be true");
    });

});