// let name = 'A'
// let strin = `toi la ${name}`;

// console.log(strin);

// let str1 = 'Toi yeu'
// let str2 = 'Viet Nam';

// let string = str1 + ' ' + str2;
// let string2 = `${str1} ${str2}`;

// console.log('cach 1: ', string);
// console.log('cach 2: ', string2);

// let a = 12;
// console.log(typeof(a));
// a = a.toString();
// console.log(typeof(a));

// let array = [23, 100];
// let str = '';
// str = `toi nam nay ${array[0]} tuoi, D/C: ${array[1]}`;
// console.log(str);

// let str = ' hello ';
// console.log(str.length);

// let mess = 'Hello';
// let index = mess.indexOf('e',2); // indexOf('str', pos); pos: vi tri bat dau search
// let lastIndex = mess.lastIndexOf('e', 1); // lastIndexOf('str', number); number: vi tri ket thuc search
// console.log('index', index);
// console.log('last index', lastIndex);

// let str = 'Toi dang hoc js o Neshtech';
// let index = str.indexOf('j');
// let index2 = str.indexOf('s');
// console.log('idx', index);
// console.log('idx2', index2);

// let findstr = str.slice(index, index2+1); //slice(num1, num2); cat tu num1 < num2 (ko lam thay doi chuoi)
// console.log('find: ', findstr);

// let str = 'js: Toi dang hoc js o Neshtech'
// let newStr = str.replace('js', 'java');
// console.log(newStr);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let str1 = 'abc';
// let str2 = 'def';
// let newstr = str1.concat('==', str2);
// console.log(newstr);

// let str = ' hello ';
// console.log(str.length);
// console.log(str.trim().length);

// let str = 'Toi yeu VN'
// let arr = str.split(' ');
// console.log('arr', arr);

let str = 'Hello World';

const getStartEnd = (chuoi) => {
    let a;
    let b;
    a = chuoi.slice(0,1);
    b = chuoi.slice(chuoi.length-1, chuoi.length);
    return `dau: ${a} - cuoi: ${b}`;
}
// console.log('lay dau cuoi: ', getStartEnd(str));

const reverseStr = (chuoi) => {
    let arr = chuoi.split('');
    let revArr = arr.reverse();
    let newStr = revArr.join('');
    return newStr;
}
const reverseStr2 = (chuoi) => chuoi.split('').reverse().join('');
// console.log('dao nguoc chuoi: ', reverseStr2(str));


const getStr = (chuoi) => chuoi.slice(chuoi.indexOf('A'), chuoi.indexOf('S')+1)

// console.log(getStr('toi muon tim ki tu ABCDS trong chuoi duoi day'));

const getStrLength = (mang, n) => {
    for (let i = 0; i < mang.length; i++){
        if(mang[i].length >= n){
            return mang[i];
        }
    }
    return 'error';
}
let arr = ['abc', 'defghi', 'opiu'];
// console.log(getStrLength(arr, 3));

function countChar(chuoi, char){
    let count = 0;
    for (let i = 0; i < chuoi.length; i++){
        if(chuoi[i] === char){
            count++;
        }
    }
    return count;
}
console.log(countChar(str, 'l'));

const changeCamelToSnake = (chuoi) => {
    for(let i = 0; i < chuoi.length; i++){
        console.log(chuoi[i]);
        if(chuoi[i] === chuoi[i].toUpperCase()){
            console.log('true');
            chuoi = chuoi.replace(chuoi[i], `_${chuoi[i].toLowerCase()}`);
        }
    }
    return chuoi;
}
console.log(changeCamelToSnake('changeCamelToSnake'));
