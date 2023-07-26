module.exports = function findItemsOver(list, threshold) {
    return list.filter(item => item.qty >= threshold);
  };
  
