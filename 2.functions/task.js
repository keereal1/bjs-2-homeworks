function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    } if (arr[i] < min) {
        min = arr[i];
      }
    sum = sum + arr[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

getArrayParams (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function summElementsWorker(...arr) {
let sum = 0;
for (let i = 0; i < arr.length; i += 1) {
  sum = sum + arr[i];
}

return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;

  if (arr.length === 0) {
    return 0; }

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    } if (arr[i] < min) {
        min = arr[i];
      }
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0
let sumOddElement = 0;

if (arr.length === 0) {
  return 0; }

for (let i = 0; i < arr.length; i += 1) {
 if (arr[i] % 2 === 0) {
  sumEvenElement = sumEvenElement + arr[i];
 } else {
  sumOddElement = sumOddElement + arr[i];
 }
}

return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
let sumEvenElement = 0;
let countEvenElement = 0;

if (arr.length === 0) {
  return 0; }
  
for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] % 2 === 0) {
    sumEvenElement = sumEvenElement + arr[i];
    countEvenElement += 1;
   } 
 }

 return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
for (let i = 0; i < arrOfArr.length; i += 1) {
  const funcResult = func(...arrOfArr[i]);
  if (funcResult > maxWorkerResult) {
    maxWorkerResult = funcResult;
   }
  }

   return maxWorkerResult;
 }

