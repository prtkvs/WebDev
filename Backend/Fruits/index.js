//WORKS AS A PUBLIC CLASS FILE TO LET THEM ACCESS ON OTHER DIRECTORIES AS WELL FROM THIS DIRECTORY
//NAME (MUST BE) - index.js

const apple = require("./apple");
const orange = require("./orange");
const banana = require("./banana");

let fruits = [apple,banana,orange];
module.exports = fruits;