// let heroes = [["batman" ,"superman" , "wonderwomen"],["spiderman" , "thor" , "captainAmerica"]];
// for (let i = 0; i < heroes.length; i++){
//     console.log(i,heroes[i],heroes.length);
//     for (let j = 0; j < heroes[i].length; j++) {
//         console.log(`j=${j},${heroes[i][j]}`);
        
//     }
// }
/*
 use of $ literal :-
 1. const name = "Alice";
 const age = 30;
 
 console.log("Hello, my name is " + name + " and I am " + age + " years old.");
  
 2. const name = "Alice";
 const age = 30;
 
 console.log(`Hello, my name is ${name} and I am ${age} years old.`);
*/ 
/*
let student = [["alice",96],["robert",63],["bruce",99]];
for (let i= 0; i < student.length; i++) {
    for (let j = 0; j < student.length; j++) {
        console.log(student[i][j]);   
    }
    
}*/
/*
let fruits = ["mango","apple","pineapple","guava"];
for(fruit of fruits){
    console.log(fruit);
}
for(letter of "apna college"){
    console.log(letter); 
}
*/
let todo =[];
let req = prompt("please enter your request");
while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list"){
        console.log("--------------");
        for(let i =0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("---------------");
    }
    else if(req=="add"){
        let task = prompt("Enter the task that yout want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let idx = prompt("enter the index of task that you want to delete");
        todo.splice(idx,1);
        console.log("deleted");
    }
     req = prompt("please enter your request again :");
}
