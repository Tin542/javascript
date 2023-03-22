//array[row][column]
// indexOf return -1 khi value ko nam trong array.

let arr = [
  [1, 4, 2, 7],
  [5, 7, 4, 6],
  [2, 9, 1, 5],
  [6, 7, 2, 6],
];
const getMax = (mang) => {
  let max = mang[0];
  for (let i = 1; i < mang.length; i++) {
    if (mang[i] > max) {
      max = mang[i];
    }
  }
  return max;
};

function getArrColumn(arr, index) {
  let arrColumn = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    arrColumn.push(arr[i][index]);
  }
  return arrColumn;
}

const queenNumber = (mang) => {
  let result = [];
  for (let i = 0; i < mang.length; i++) {
    // console.log('i', i);
    let maxRow = getMax(mang[i]);
    // console.log('max row', maxRow);
    let indexCol = mang[i].indexOf(maxRow);
    // console.log('index', indexCol);
    let arrCol = getArrColumn(mang, indexCol);
    // console.log('arr col', arrCol);
    if (maxRow === getMax(arrCol)) {
      result.push(maxRow);
    }
  }
  console.log("queen numbers: ", result);
};
queenNumber(arr);
// const sumArray = (arr, row, column, index) => {
//   let sum = 0;
//   let newArray = [];
//   for (let i = index; i < row; i++) {
//     for (let j = index; j < column; j++) {
//       newArray.push(arr[i][j]);
//     }
//   }
//   for (let i = 0; i < newArray.length; i++) {
//     sum += newArray[i];
//   }
//   return sum;
// };

// const tongDuongBien = (mang) => {
//   let row = mang.length;
//   let column = mang[0].length;
//   console.log(row, column);

//   let sumAll = sumArray(mang, row, column, 0);
//   let subSum = sumArray(mang, row-1, column-1, 1);
//   console.log("sumAll: ", sumAll);
//   console.log("sub inline: ", subSum);
//   let sumOut = sumAll - subSum;
//   console.log('sum outline: ',sumOut);
// };

// tongDuongBien(arr);

// const tongSoChan = (mang) => {
//   let sum = 0;
//   for (let i = 0; i < mang.length; i++) {
//     for (let j = 0; j < mang[i].length; j++) {
//       if (mang[i][j] % 2 === 0) {
//         sum += mang[i][j];
//       }
//     }
//   }
//   return sum;
// };

// const findMax = (mang) => {
//   let max = mang[0][0];
//   for (let i = 0; i < mang.length; i++) {
//     for (let j = 0; j < mang[i].length; j++) {
//       if (mang[i][j] > max) {
//         max = mang[i][j];
//       }
//     }
//   }
//   return max;
// };

// const checkSoNguyenTo = (n) => {
//   let flag = false;
//   if (n <= 2) {
//     return true;
//   }
//   for (let i = 2; i < n - 1; i++) {
//     if (n % i === 0) {
//       flag = true;
//     } else {
//       flag = false;
//     }
//   }
//   return flag;
// };

// const demSoNguyenTo = (mang) => {
//   let count = 0;
//   for (let i = 0; i < mang.length; i++) {
//     for (let j = 0; j < mang[i].length; j++) {
//       if (checkSoNguyenTo(mang[i][j])) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

// const sapXepTangDan = (mang) => {
// let newArray = [];
// let resultArray = [];
// for (let i=0; i < mang.length; i++){
//   for(let j = i; j < mang[i].length; j++){
//     newArray.push(mang[i][j]);
//   }
// }
// newArray.sort((a,b) => a-b);
// for(let i=0; i < newArray.length; i +=2){
//   newArray.push()
// }
// return mang;
// };

// console.log('sap xep tang dan: ', sapXepTangDan(arr));
// console.log("so nguyen to = ", demSoNguyenTo(arr));
// console.log("max = ", findMax(arr));
// console.log("sum = ", tongSoChan(arr));
