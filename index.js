const express = require("express");
const app = express();
const port = 3000;

let arr = [2, 0, 8, 5, 1, 2, 5];

const trbcong = (array) => {
  let tong = 0;
  for (let i = 0; i < array.length; i++){
    tong = tong + array[i];
  }
  tong = tong/array.length;
  return tong;
}

const timsoduynhat = (mang) => {
  console.log('chua xong');
}

const timsotrung = (mang) => {

}

const timminmax = (array) => {
  array.sort((a,b)=> a-b);
  return `min = ${array[0]} - max = ${array.length-1}`;
}

console.log('minmax: ', timminmax(arr));

console.log('timsoduynhat: ', timsoduynhat(arr));
console.log('trbcong: ', trbcong(arr));

// const soLonNhat = (mang) => {
//   let max = mang[0];
//   for (let i = 1; i < mang.length - 1; i++) {
//     if (mang[i] > max) max = mang[i];
//   }
//   return max;
// };

// const sumArray = (mang) => {
//   let sum = mang[0];
//   for (let i = 1; i < mang.length; i++) {
//     sum += mang[i];
//   }
//   return sum;
// };

// const findIndex = (mang, num) => {
//   for (let i = 0; i < mang.length; i++) {
//     if (num === mang[i]) {
//       return `So ${num} o vi tri ${i}`;
//     }
//   }
//   return `Ko tim thay so ${num}`;
// };

// console.log("so lon nhat trong mang: ", soLonNhat(arr));
// console.log("Tong phan tu trong mang: ", sumArray(arr));
// console.log(findIndex(arr, 8));

app.listen(port, () => {
  //   console.log(`Example app listening on port ${port}`)
});
