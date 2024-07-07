// console.log("Hello World!");
let pencilPrice = 10;
let erasorPrice = 5;
// let output = "The total price is:" + (pencilPrice+erasorPrice) + "Rupees.";
// console.log(output);
//directly (syntax dekho!)
console.log("The total price is:", pencilPrice+erasorPrice,"Rupees.");
//Template literals: they are used to add embeddedd expressions in a string.
let output = `The total price is: ${pencilPrice+erasorPrice} Rupees.`; // ` = symbol is called backtick. //this statement is an example of template literals
console.log(output);
/*note: === operator checks number as well as type
e.g. "123"===123 gives false but "123"==123 gives true check in console  
some important examples of operators are:
 0== '' gives true , 0==false gives true , null == undefined gives true, similarly false for === operators*/
//these conditions always give falsy values in if else statements :- false , 0, -0, 0n(BigInt value), ""(empty string,no space in between), null, undefined and NaN. everything else gives true values.
//ALERT AND PROMPTS
/*to get a popup msg on the top of your website use alert
alert("this is a simple alert message");
console.warn("this is a warning message");
console.error("this is an error message");*/
let firstName = prompt("enter your first name:");
let lastName = prompt("enter your last name:");
let msg= "Welcome"+" "+ firstName+" "+lastName+" "+"!";
alert(msg);
console.log(msg);
