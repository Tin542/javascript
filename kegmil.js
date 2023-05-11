function findDuplicateElement(arr1, arr2) {
  const resArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        resArray.push(arr1[i]);
      }
    }
  }
  return resArray;
}

let test1 = [1, 2, 4, 6];
let test2 = [3, 5, 6];

console.log("arrResult: " + findDuplicateElement(test1, test2));

 '1' == 1
 '1' === 1
 {} === {}

// hosting
// var let

// class component 

// hook ( custom hook )
// higher order component
