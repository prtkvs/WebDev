//DOM EVENTS - signals that something has occured after any user action (e.g what will happen if the user will press the button)
//we can use js in inline via html check click me button and operation on console after clicking it
// <button onclick ="console.log('button was clicked');console.log('mera college')">click me</button>  //using this inline in html is not beneficiery since for 100 likes we can't make 100 inline buttons therefore we use queryselector all in js
/*
let btn = document.querySelector("button");  //using this only first button will perform action
console.dir(btn);
btn.onclick=function(){
    alert("button was clicked");
    console.log("button was clicked!");
}
*/
/*
let btns = document.querySelectorAll("button");
for(btn of btns){
   // btn.onclick = sayHello;  //dont write sayHello(); like this otherwise it will execute all at starting without on clicking button
   // btn.onclick = college;  //DRAWBACK - we now cant acces sayHello only updated one is executed here, mera college .Therefore we use EVENT LISTENER
//    btn.addEventListener("click",sayHello);
//    btn.addEventListener("click",college);
    btn.addEventListener("dblclick",function(){
        console.log("you double cicked me");
    });  //similarly there are many mouse elements to use just goto mdn mouse click elements on internet and checkout!
    btn.onmouseenter = function(){
        console.log("you selected a button");  //whenever you just take ur cursor on button you will get this msg on console
    }
    console.dir(btn);   //used to find all elements to access on button in console tab
}
function sayHello(){
    alert("hello");
}
function college(){
    alert("mera college");
}
//REMINDER : CALLBACKS- these are the functions which goes as an argument in other function
*/

/*
//ACTIVITY
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText= randomColor; 

    let div = document.querySelector("div");
    div.style.backgroundColor= randomColor;
    console.log("color updated");
});
function getRandomColor(){   //check how to generate colors and select range using random method which we already studied for getting random numbers in particular range
    let red = Math.floor(Math.random()*255); //no need to +1 since range is starting from 0 itself
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color; //getRandomColor(); use this check random color value in console
}

//Event listeners are not just for button rather elements also
let p = document.querySelector("p");
p.addEventListener("click",function(){
    console.log("para was clicked");
} );

let box = document.querySelector(".box");
box.addEventListener("mouseenter",function(){
    console.log("Hovered across box");
});
*/

//  'this' in event listener (used inside callback of event listener)
/*
let newBtn = document.querySelector("button");
newBtn.addEventListener("click",function(){
    console.log(this);   //not occuring earlier since there were another button in html 
    console.dir(this);
    console.dir(this.innerText); //click me (on console)
    this.style.backgroundColor = "blue";
});
    //now to select all written on screen to blue:
    //method-1 add individually like we did with button
let h1 = document.querySelector("h1");
h1.addEventListener("click",function(){
    console.log(this);    
    console.dir(this);
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});
let h3 = document.querySelector("h3");
h3.addEventListener("click",function(){
    console.log(this);    
    console.dir(this);
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});

let p = document.querySelector("p");
p.addEventListener("click",function(){
    console.log(this);    
    console.dir(this);
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});
*/
    //method -2:(to remove this redundancy){repeating code must be avoided at any cost}
/*
    let newBtn = document.querySelector("button");
    let p = document.querySelector("p");
    let h3 = document.querySelector("h3");
    let h1 = document.querySelector("h1");
    function changeColor(){
        console.dir(this.innerText);
        this.style.backgroundColor = "blue";
    }
    newBtn.addEventListener("click",changeColor);
    p.addEventListener("click",changeColor);
    h3.addEventListener("click",changeColor);
    h1.addEventListener("click",changeColor);
*/


//KEYBOARD EVENTS
/*let btn = document.querySelector("button");
btn.addEventListener("click",function(event){
    console.log(event);  //generates a PointerEvent
    console.log("button clicked");  
});
let inp = document.querySelector("input");
*//*
inp.addEventListener("keydown",function(){  //other examples like keydown ko check karo in mdn on google
console.log("key was pressed");
}); 
*/
/*
inp.addEventListener("keyup",function(){  //other examples like keyup ko check karo in mdn on google
    console.log("key was released");
    }); 
inp.addEventListener("keydown",function(event){
    console.log(event); //keyboard EVENT unlike pointer event  
    console.log("key was pressed");
    }); 
*//*
inp.addEventListener("keydown",function(event){
    console.log("key= ",event.key); //(anything that you will type)
    console.log("key code= ",event.code); //Key(anything that you had typed)
    //e.g / Slash 
    console.log("key was pressed");
    });
*//*
inp.addEventListener("keydown",function(event){
    console.log("code = ", event.code);//ArrowUp,ArrowDown,ArrowRight,ArrowLeft
    if(event.code=="ArrowUp"){
        console.log("character moves up");
    }
    if(event.code=="ArrowDown"){
        console.log("character moves down");
    }
    if(event.code=="ArrowRight"){
        console.log("character moves right");
    }
    if(event.code=="ArrowLeft"){
        console.log("character moves left");
    }
});
*/

//FORM EVENTS:
/*
let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault(); //to stop the action which occur aftr clicking on submit
    // alert("form submitted");
   // let inp= document.querySelector("input");
   // console.dir(inp);
    //console.dir(inp.innerText); //does not gives the value we stored inside username since its an external text, therefore we can check using dir where it is there ,so we found its inside value.Therefore: 
   // console.dir(inp.value);  //gives value that typed after submitting

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);
    alert(`Hi ${user.value}, your password is set to ${pass.value}`);

    console.dir(form);
    // use form.elements , form.elements[0] ,etc 
    let user = this.elements[0];    //or write directly form.elements[0] (both same)
    let pass = this.elements[1];
    console.log(user.value);
    console.log(pass.value); 
    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});
*/


//MORE EVENTS
/*
//1. change event- it occurs when the value of an element has been changed(only works on <input>,<textarea>and<select> elements).
let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener("change",function(){      //check only initial and final change for all small changes we use input events
    console.log("change event");
    console.log("final value = ", this.value);
});
//2. input event = it fires when the value of an <input>,<select>or<textarea> element has been changed
user.addEventListener("input",function(){
    console.log("input changed");
    console.log("final value = ", this.value);

    //Note : non-character keys like shift,arrowup ,etc do not trigger input event
});
*/

//ACTIVITY
let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText= inp.value;
});