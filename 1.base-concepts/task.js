"use strict"
function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  let arr = [];
   if (d === 0) {
    arr = [-b / (2 * a)];
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
  
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = (percent / 100) / 12;
  let creditBody = amount - contribution;
  let monthlyPay = creditBody * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));

  return parseFloat((monthlyPay * countMonths).toFixed(2));
}