const assert = require('assert');
const totalPhoneBill = require('../totalPhoneBill.js');

describe('totalPhoneBill function' , function(){
  it('It should return total calls bill when passed with total no of smses and calls made ' , function(){
      assert.equal('R7.45', totalPhoneBill('call, sms, call,sms, sms'), "This should be true");
  });
  
  it('It should return total calls bill when passed with total smses made ' , function(){
      assert.equal('R1.30', totalPhoneBill('sms, sms'), "This should be true");
  });

});