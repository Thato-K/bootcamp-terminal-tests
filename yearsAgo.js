module.exports = function yearsAgo(year){
    const currentYear = new Date().getFullYear();
    return currentYear - year;
  };