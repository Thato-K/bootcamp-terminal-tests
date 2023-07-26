module.exports = function countRegNumber(registrationNumbers){
    const registrationNumbersArray = registrationNumbers.split(",");
     return registrationNumbersArray.length;
   }