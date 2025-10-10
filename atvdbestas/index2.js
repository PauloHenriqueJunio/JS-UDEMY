// function num(min, max) {
//     let r = (Math.random() * (max - min) + min);
//     return Math.floor(r);
// }

// const numero = num(1,50);
// console.log(numero);

let num = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
const max = (x, z) => x > z ? x : z;
console.log(max(num, num));
