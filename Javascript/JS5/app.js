let student ={
    name : "XYZ",
    roll : 32,
    marks : 93.2
};
const item ={
    price : "$32",
    discount : 75,
    color : ["red","black"],
    null : "not a boolean bruhh",
    warranty : 5
};
/*
to access these objects individually :-
1. item["price"];  //gives $32 
2. item.price;     //gives $32
but exception/difference in both is: we can't store variables in 2. method.
i.e. let rate = "price";
1. item[rate];     //gives $32
but 
2. item.rate;      //ERROR
Note: everything written inside sq. brackets for accesing particular objects are string, neither an index nor a keyword,boolean E.g in item["null"]✅is not a boolean etc. but not in the case of the "." operator e.g item.null //gives ERROR
*/
//ADDING , UPDATING and DELETING VALUES:
item.price= "87";      //updating(true for converting a number into string, array or else)
item.quality = "good";     //adding
delete item.warranty;       //deleting
//Nested Objects:
let classInfo={
    aman: {
        marks: 97,
        city : "Delhi"
    },
    shraddha: {
        marks: 97,
        city : "haryana"
    },
    alex: {
        marks: 97,
        city : "karnataka"
    }
};                              //access individually using classInfo.alex.city ;
//ARRAYS OF OBJECT:-
const bioData= [
    {
        name : "aman",
        grade: "A+",
        city : "Delhi"
    },
    { 
        name : "shraddha",
        grade: "C",
        city : "Una"},
    {
        name : "Sid",
        grade: "B",
        city : "Lucknow"
    }
];
//for accessing above:-
/* bioData[0]; //gives {name: 'aman', grade: 'A+', city: 'Delhi'}
   bioData[2].grade; //gives B
   Similarly here also we can update , add and delete values (same as above/you know how)
*/
/*on console tab when you type - Math 
then after scroll down you can how many ways you can use this in-built properties and methods
e.g Math.PI; //3.141592653589793
e.g Math.abs(-23) //23
much more like abs,floor(GIF),ceil(opp. of GIF i.e round off to right integer),random(gives any random value ranges - [0,1) ) etc.
To get any random value in between any number:-
Math.random() *10 ; // to get random value between 1 to 10
for integer - Math.floor(Math.random() *10);
But it will never generate 1. Therefore :-
Math.floor(Math.random() *10)+1; 
*/