let language1 = 'JavaScript';

let str1 = language1.substring(4);

console.log( 'str1 wrapper type is :' + typeof str1);

console.log(str1)

let language = 'JavaScript';
let tmp = new String(language);

str1 = tmp.substring(4);

console.log(str1);

tmp = null;