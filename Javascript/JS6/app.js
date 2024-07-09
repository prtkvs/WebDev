function print1to10(){
    for (let i = 1; i <=10;i++){
        console.log(i);
    }
}
print1to10();
//storing and using RETURN:-
function sum(a,b){
    return a+b;
    //anything written after return will never execute
}
console.log(sum(36,4));//40   //just calling sum with arguments will not show any value
//********
console.log(sum(sum(4,16),20));  //40 //you know this rizz
//return use:-
function isAdult(age){
    if(age>17){
        return "ADULT";
    }else
    return "Not adult";
}
//  isAdult(12);   use this is console tab to check not here
 //Q. Create a function that returns the concatenation of all strings in an array.
let str = ["Hi","hello","bye","but","why"];
function concat(str){
    let result="";    //if not initialize via this, it will result "undefinedHihellobyebutwhy"
    for(let i =0;i<str.length;i++){
        result += str[i];
    }
    return result;
}/*
//SCOPING:-
let sum=54;   //GLOBAL SCOPE
function calSum(a,b){
//    let sum = a+b;  //FUNCTION SCOPE
    console.log(sum);
}
//calSum(3,4);//error since we cant access sum which is declared inside a scope 
console.log(sum);
READ BLOCK SCOPING(you already know) AND LEXICAL SCOPING(nested function call(in can call out but not vice versa)) FROM NOTES

A function expression is that type of nameless function which is declared with a variable with ofc no name with it.
e.g. let fun = function(a,b){
            return a+b;
        } 
    fun(2,3);   therefore use variable name to call that function
    Hence now we can perform any actions with function which are possible with variables 
*/
//High Order functions are those functions 1. which takes multiple arguments 2.returns a function
/*
function multipleGreet(func,n){  //higher order function 
    for(let i=1;i<=n;i++){
        func();
    }
}
let greet = function(){
    console.log("Hello *10 times");
}
multipleGreet(greet,10);
*/
//High order functions (Returns)

function OddEvenfactory(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request=="even"){
            return function(n){
                console.log(n%2==0);
            }
    }else{
        console.log("wrong input entered");
    }
}
let request = "odd";
/*method-2 :-
function OddEvenfactory(request){
    if(request=="odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }else if(request=="even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    }else{
        console.log("wrong input");
    }
}
let request = "odd";
access using:-
let fun = OddEvenfactory(request);
fun(3); //true*/

//Methods - functions defined inside an object

const calculator = {
    num: 55,
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    }
};                  //access using calculator.add(3,9);
//method-2:-
const calculator2 = {
    num: 55,
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
};                  //accessing same as for above