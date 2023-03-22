// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function alphabetPosition(text) {
  console.log("text: ", text);
  let str = text.toLowerCase();
  let a = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) - 96 > 0 && str.charCodeAt(i) - 96 <= 26) {
      a += str.charCodeAt(i) - 96 + " ";
    }
  }
  return a.trim();
}

const getDuplicate = (ar) => {
  const duplicates = [];
  for (let i = 0; i < ar.length - 1; i++) {
    for (let j = i + 1; j < ar.length - 1; j++) {
      if (ar[i].toLocaleLowerCase() === ar[i]) {
        if (
          ar[i].toUpperCase() === ar[j] &&
          !duplicates.includes(ar[i].toUpperCase())
        ) {
          duplicates.push(ar[i].toUpperCase());
          console.log(ar[i].toUpperCase());
        }
      } else if (ar[i].toUpperCase() === ar[i]) {
        if (
          ar[i].toLowerCase() === ar[j] &&
          !duplicates.includes(ar[i].toUpperCase())
        ) {
          duplicates.push(ar[i].toUpperCase());
          console.log(ar[i].toUpperCase());
        }
      }
    }
  }
  return duplicates;
};
function solution(S) {
  // Implement your solution here
  let arr = S.split("");
  let duplicateArray = getDuplicate(arr);
  if (duplicateArray.length === 0) {
    return "NO";
  } else {
    let max = alphabetPosition(duplicateArray[0]);
    // console.log("max", max);
    let maxCharacter = "";
    console.log("maxCharacter: ", maxCharacter);
    for (let i = 0; i < duplicateArray.length; i++) {
      // console.log("lop1: ", duplicateArray[i]);
      if (alphabetPosition(duplicateArray[i]) > max) {
        max = alphabetPosition(duplicateArray[i]);
        maxCharacter = duplicateArray[i];
        // console.log("lop: ", duplicateArray[i]);
      }
    }
    return maxCharacter;
  }
}

let chuoi = "aaBabcDaA";
console.log("solution: ", solution(chuoi));
