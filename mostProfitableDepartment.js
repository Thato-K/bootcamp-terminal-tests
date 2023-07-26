module.exports = function mostProfitableDepartment(salesData) {
  if (salesData.length === 0) {
    return null; // Return null if salesData is empty
  }

  const departmentSales = {};

  // Loop through the sales data and add up the sales for each department
  for (let i = 0; i < salesData.length; i++) {
    const department = salesData[i].department;
    const sales = salesData[i].sales;

    if (department in departmentSales) {
      departmentSales[department] += sales;
    } else {
      departmentSales[department] = sales;
    }
  }

  // Find the department with the highest sales
  let mostProfitable = null;
  let highestSales = 0;

  for (const department in departmentSales) {
    if (departmentSales[department] > highestSales) {
      mostProfitable = department;
      highestSales = departmentSales[department];
    }
  }

  return mostProfitable;
};
