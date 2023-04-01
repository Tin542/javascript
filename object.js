let arPerson = [
  { name: "John", age: 21, salary: 100 },
  { name: "Dick", age: 18, salary: 200 },
  { name: "Damian", age: 10, salary: 1000 },
  { name: "Alferd", age: 56, salary: 10000 },
  { name: "Bruce", age: 25, salary: 555 },
];
// console.log(arPerson);

// sap xep tang dan theo tuoi
const sortAge = (mang) => mang.sort((a,b)=> a.age - b.age);
// console.log(sortAge(arPerson));

// Tinh tong luong 
function sumSalary(mang){
    let sum=0;
    for(let i=0; i < mang.length; i++){
        sum += mang[i].salary;
    }
    return sum;
}
// console.log('tong luong: ', sumSalary(arPerson));

let obj1 = {name: "John", age: 30}; 
let obj2 = {city: "New York"}; 
let newObj = {...obj1, ...obj2}; // ... copy thanh phan ben trong obj
// console.log('newObj: ', newObj);

let obj3 = { 
	name: "John", 
	age: 30, 
	address: { 
		street: "123 Main St", 
		city: "New York", 
		state: "NY" 
	} 
};
function getAllProperties(obj) {
  let props = {};
  for (let prop in obj) {
    if (typeof obj[prop] === 'object') {
      let nestedProps = getAllProperties(obj[prop]);
      props = {...props, ...nestedProps};
      // console.log(props);
    } else {
      props[prop] = obj[prop];
    }
  }
  return props;
}
console.log('newObject: ', getAllProperties(obj3))

// for (let i in arr): i la index trong arr
// for (let i of arr): i la value trong arr
// arr.forEach((value, index)=>{}): giống for bth
// arr.map((value, index)=>{}): trả về 1 arr mới dựa trên ar cũ 


