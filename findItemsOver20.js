module.exports = function findItemsOver20(list) {
    return list.filter(item => item.qty > 20);
  };