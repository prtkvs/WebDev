let arr = [1,2,3,4,5];
let print = function(el){  //el is just a shortcut for element
    console.log(el);
};
arr.forEach(print); //1 2 3 4 5 in next lines respectively
arr.forEach((el)=>{
    console.log(el);
});
//FOREACH for objects:
let student = [
{
    name : "aman",
    marks : "23"
},
{
    name : "alex",
    marks : "98.2"
},
{
    name : "robin",
    marks : "97.33"
}];
student.forEach((keys)=>{   //key as a parameter for students
    console.log(keys.marks);
});
 
//MAP AND FILTER:
let nums = [1,2,3,4,5];
let double = nums.map((el)=>{
    return el *2;
});     //write double in console->enter->[2, 4, 6, 8, 10]
let gpa = student.map((el)=>{
    return el.marks/10;
});
//filter is use to make some changes
let number = [1,2,3,4,5,6,7,8,9,10];
let ans = nums.filter((el)=>{
    return el%2==0;
});
/*
every(Logical AND) -> used for returning true if every element of array gives true for some function. Else returns false.
used in console tab
[1,2,3,4,5,6,7,8,9].every((el)=>(el%2==0)); //false ,since nums contain 3,5,7,9 and 1 also
[2,4,6].every((el)=>(el%2==0)); //true
*/
//similarly "some" method is used for Logical OR operations.


//Reduce - reduces the array to a single value-> reduce((accumulator,element)) ALSO USED TO CALCULATE THE SUM AND MAX OF ARRAY
let int = [1,2,3,4,5];
let finalValue = int.reduce((acc,el)=>acc+el);
console.log(finalValue); //15 but How?
/*reason:
initially at acc =0 therefore (0,1) -> zero for accumulator and 1 for element(first element of int[])
therefore acc+el = 0+1=1 now accumulator updates to 2
therefore for next element acc+el = 1+2=3
lly, 3+3=6
lly, 6+4=10
lly, 10+5=15
hence finalValue = 15 i.e also used to CALCULATE THE SUM OF THE ARRAY(1+2+3+4+5=15)
*/
/*Max of array normal concept:-
let arr1 = [4,3,6,8,2,1];
let max = arr[0];
for(let i =1;i<arr1.length;i++){
if(max<arr1[i]){
   max = arr1[i]; 
}
}
console.log(max);
*/
//now how to use max directly using reduce method:
let arr2 = [4,3,6,8,2,1];
let max = arr2.reduce((max,el)=>{           //one max is defined inside other scope therefore we used 2 times
    if(max<el){     //since internally step by step chalta hai ussi me condition check kr lega
        return el;
    }else {
        return max;
    }
});
console.log(max);

//Default Parameters -> used to give default value to arguments
function sum(a,b=3){
    console.log(a+b);       //note: mentioning 100 times that if you want to use return a+b; then use sum(2,3) in console tab not here
}
sum(2);  //gives 5
sum(2,4); //6 since, if parameters already passed then default value will be ignored
//if:
function sum(a=3,b){
    console.log(a+b);
}
sum(2); //NaN since a =2 and b is undefined