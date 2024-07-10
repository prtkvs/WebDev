//'this' keyword (in objects methods can't directly access key so that we use this keyword)
const student ={
    name:"shraddha",
    age: 34,
    eng : 94,
    maths : 90,
    chem : 76,
    getAvg(){
        // let avg = (eng+maths+chem)/3;    gives eng is not defined error
        let avg = (this.eng+this.maths+this.chem)/3;
       // console.log(avg);   //use-> student.getAvg(); ->11 86.66666666666667
        console.log(`${this.name} got avg marks = ${avg}`)                   
    }
} /*"This" keyword refers to the object that is executing the current piece of code
note: alert("hello"); -> by default -> window.alert("hello");  therefore if 'this' is executed for outside object it will refer to the window */

//TRY AND CATCH - (when we get a certain error then anything written after that statement doesn't execute and our website gets crashed)
//TRY - allows you to define a block of code to be tested for errors while it being executed
//CATCH - allows you to define a block of code to be executed ,if an error occurs in the try block. i.e agar try ke ander error aaya to catch ke pass chala jayega and if no error in try then no catch
//Note: always mention both(try and catch) if one is present there


//console.log(a);  //error - variable 'a' is not defined
console.log("hello");
try{
    console.log(a);
}/*
catch{
    console.log("caught an error 'a' is not defined");          //execute only if try throws an error
}*/
catch(err){
    console.log("caught an error 'a' is not defined");
    console.log(err);       //ReferenceError: a is not defined
}
console.log("hello");

//ARROW FUNCTIONS
 const sum=  (a,b) => {
    console.log(a+b);
 };
 const cube= n => {     //for single argument brackets are not necessary
    return n*n*n;  //use cube(4) to access
 };
 const pow =(a,b)=>{
    return a**b;
 };
 const hello = ()=>{    //if nothing is in the argument then also braces are neccesary.
    console.log("hello world");
 };
 //ARROW FUNCTIONS with Implicit return (meaning automatically return)
 const mul  = (a,b) => (a*b);
/*
 //Set Timeout          (used for API calls etc.)

 console.log("Hello There");
//  setTimeout(func,4000);    //syntax where func is a *callback function*

setTimeout(()=>{
    console.log("Mera College");
},4000);

 console.log("Welcome to :");

 //Set Interval

 console.log("Hello Again");
 let id1 =setInterval(()=>{
    console.log("Mera College");
},2000);
console.log(id1);
 console.log("Welcome again :");
 let id2 =setInterval(()=>{
    console.log("Tumhara College");
},3000);
console.log(id2);
//use - clearInterval(id1) in console tab to stop id1 and id2 respectively
*/
//'This' in arrow functions
const classmate={
    name : "aman",
    age : 43,
    marks : 98,
    getName: function (){
        console.log(this); //not for window but for object since declared inside it.
        return this.name;   //aman
    },
    getMarks: ()=> {        //arrow function
        console.log(this);  //gives for window however defined inside object
        return this.marks;  //gives undefined  
    },       //reason - whenever we call arrow functions-> 'this' for arrow func are not calling object rather 'parent's scope's this so here scope of getMarks is classmate and parent scope is Window //same concept as of Lexical scope (revise kro)
    getInfo1 : function(){
        setTimeout(()=>{        //passing arrow function inside Callback
            console.log(this);  //classmate object now!!!
        },2000);
    },
    getInfo2 : function(){
        setTimeout(function(){        
            console.log(this);  //window object now!!!
        },2000);
}   //why this change?- We already know for arrow function 'this' gives for parent scope 'this' so here setTimeout scope is getInfo2 and it's parent scope is Classmate !!! (understood) -> therefore parent ko call lagane wali object concept we studied in lexical scope
}