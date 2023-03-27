let arPerson = [
  { name: "John", age: 21, salary: 100 },
  { name: "Dick", age: 18, salary: 200 },
  { name: "Damian", age: 10, salary: 1000 },
  { name: "Alferd", age: 56, salary: 10000 },
  { name: "Bruce", age: 25, salary: 555 },
];
console.log(arPerson);

// sap xep tang dan theo tuoi
const sortAge = (mang) => mang.sort((a,b)=> a.age - b.age);
console.log(sortAge(arPerson));

// Tinh tong luong 
function sumSalary(mang){
    let sum=0;
    for(let i=0; i < mang.length; i++){
        sum += mang[i].salary;
    }
    return sum;
}
console.log('tong luong: ', sumSalary(arPerson));

