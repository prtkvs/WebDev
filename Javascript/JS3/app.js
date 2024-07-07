//MAKE NOTE BY YOURSELF from code and notes
// let msg= "  hell  o  "   ✅
// msg.trim();  //'hell  o' --trims starting and ending part of the string  ✅
//Syntax for lowercase and uppercase :--✅
// let message= "Hello There";
// console.log(message);
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());
//message_chaining:--✅
// let greet= "    hello   ";
// console.log(greet.trim().toUpperCase()); //priority order from left to right  i.e first trimmed then uppercase
//slice method:--
// let msg = "Apna College"
// console.log(msg.slice(5,11)); //Colleg since it requires index +1 value
// console.log(msg.slice(5)); //College i.e if last tak print karwana ho to directly ye also method-2 for this is:
// console.log(msg.slice(5,msg.length)); //College
// console.log(msg.slice(-1)); //e i.e length - 1 value 
// console.log(msg.replace("Apna","Mera")); //replace value //Note: Sirf first occurence uss word ka hi replace hoga sirf
// console.log(msg.repeat(4)); //repeats 4 times //Apna CollegeApna CollegeApna CollegeApna College
// Arrays:--
// let students= ["aman" , "shraddha" , "pandey"]; //collection of Strings
// console.log(students); 
//APART FROM C++/JAVA EXCEPTION: here we can make mixed array i.e we can store different types in same variable
// let data= ["aman",21,98.4];  //mixed arrays
// console.log(data);
//methoda of arrays : Push Pop Unshift Shift
// // let cars = ["xuv","toyota","audi","bmw"];
// console.log(cars); //['xuv', 'toyota', 'audi', 'bmw']
// console.log(cars.push("ferrari")); //5 but when you type cars and enter ]'xuv', 'toyota', 'audi', 'bmw', 'ferrari'] always adds up in the end same goes for pop rejects from the end also returns its value
// console.log(cars.pop()); 
//similarly in order to push in start use unshift and shift for end
//better use of array methods:--
// let followers = ["a","b","c"];
// let blocked = followers.shift();
// console.log(followers); ['b', 'c']
// console.log(blocked); 'a'
//indexOf and include
// let radhika = ["Jon", "Debu", "Brijesh"];
// console.log(radhika.indexOf("Debu")); //1
// console.log(radhika.includes("Neil")); //false
//Slice in array :COPIES the values of an array
let colors = ["red","yellow","blue","green"];
console.log(colors.slice()); //gives same as in of colors
console.log(colors.slice(1,2));//yellow //since in slice(start,end) end value is exclusive therefore it will only give yellow
console.log(colors.slice(2));//['blue', 'green']
console.log(colors.slice(-1)); //['green']
//splice in arrays : used to remove /replace/add elements in place. syntax slice(start,delete count ,item1,item2,.......itemN) each corresponds to remove replace and add elements respectively
let newColors = ["blue","red","pink","orange","green","yellow"];
console.log(newColors.splice(4));//(2) ['green', 'yellow'] 
console.log(newColors.splice(0,1));//['blue'] //0 se delete krna start karo aur sirf ek delete kro //ye deleted value dikha raha hai
console.log(newColors.splice(0,1,"black","grey"));//['red'] //spliced value dikha raha hai + do aur add hua hai in pink and orange left
console.log(newColors);//'black', 'grey', 'pink', 'orange'
//sort in arrays
let cars = ["xuv","toyota","audi","bmw"];
console.log(cars.sort());//['audi', 'bmw', 'toyota', 'xuv']
//use these sorting for characters and strings only but do not apply for numbers because ye usko pehle strings mein convert karega then ascending order me store karega and we dont know the string vakues of numbers
