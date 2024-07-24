// let n = 5;
// for (let i = 0; i < n; i++) {
//     console.log(i, "Hello World");
// }
// console.log("bye");

// console.log(process.argv);

// let args = process.argv;
// for(let i =2 ;i<args.length;i++){
//     console.log("Hello 👋🏻: ",args[i]);
// }

// const someVal = require("./math");
// console.log(someVal);

// const math = require("./math");
// console.log(math);
// console.log(math.sum(4,2));

// const info = require("./Fruits");
// console.log(info);

// import {sum , PI} from "./math.js";  //can't use this directly first we have to make package.json file in that directory only via npm init adn them add in package - "type":"module"
// console.log(sum(1,2));

import { generate} from "random-words";

console.log(generate());