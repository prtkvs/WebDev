// const sum = (a,b)=>a+b;
// const mul = (a,b)=>a*b;
// const div = (a,b)=>a/b;
// const PI = 3.14;
// const g = 9.8;
// module.exports = 123;

// let obj = {
//     sum: sum,
//     mul : mul,
//     div : div,
//     g: g,
//     PI: PI,
// };
// module.exports = obj;

/*can also write as :
module.exports.sum = (a,b)=>a+b;

exports.mul = (a,b)=>a*b;   (directly in case of objects only )
 
but we can't write as,
exports = 5; //error since exports are only assigned as objects
*/

export const sum = (a,b)=>a+b;
export const mul = (a,b)=>a*b;
export const div = (a,b)=>a/b;
export const PI = 3.14;
export const g = 9.8;