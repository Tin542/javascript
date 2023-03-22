// function alphabetPosition(text) {
//   let str = text.toLowerCase();
//   let a = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str.charCodeAt(i) - 96 > 0 && str.charCodeAt(i) - 96 <= 26) {
//       a += str.charCodeAt(i) - 96 + " ";
//     }
//   }
//   return a.trim();
// }

// console.log(alphabetPosition("A"));
// console.log(alphabetPosition("b"));
// console.log(alphabetPosition("c"));
//   console.log(alphabetPosition("The narwhal bacons at midnight."));
//   console.log(alphabetPosition("y_/js}c^"));
//   console.log(alphabetPosition(".,[}714$"));

var str = "aaBabcAbd";
// var ar = str.split(""); // empty string separator
// console.log(ar); // [ "a", "b", "c", "d", "e", "f", "g" ]
// console.log(ar.length);

function alphabetPosition(text) {
    let str = text.toLowerCase();
    let a = "";
  
    for (let i = 0; i < str.length; i++) {
  
        if (str.charCodeAt(i) - 96 > 0 && str.charCodeAt(i) - 96 <= 26) {
          a+= str.charCodeAt(i) - 96 + ' ';
        }
      }
      return a.trim();
    }

console.log('A', alphabetPosition('A'))

// const duplicates = [];
// for (let i = 0; i < ar.length-1; i++) {
//     console.log(i);
//   for (let j = i + 1; j < ar.length-1; j++) {
    
//     if (ar[i].toLocaleLowerCase() === ar[i]) {
//       if (ar[i].toUpperCase() === ar[j] && !duplicates.includes(ar[i].toUpperCase())) {
//         duplicates.push(ar[i].toUpperCase());
//         console.log(ar[i].toUpperCase());
//       }
//     } else if (ar[i].toUpperCase() === ar[i]) {
//       if (ar[i].tolo() === ar[j] && !duplicates.includes(ar[i].toUpperCase())) {
//         duplicates.push(ar[i].toUpperCase());
//         console.log(ar[i].toUpperCase());
//       }
//     }
//   }
// }
// console.log(duplicates);
