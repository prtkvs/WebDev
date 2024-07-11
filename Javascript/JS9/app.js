//DOM(document object model) - it represent a document with a logical tree.it allows us to manipulate/change webpage content(HTML)
//use - console.dir(document); or just document to check DOM of a document object(logical tree)
console.dir(document.all[8].innerText="Peter Parker"); //to change name of h1 tag inside document.all[8] (using collection)

//SELECTING ELEMENTS
//1. BY ID
/*
selecting element(spiderman image) by id:- (in console tab)
document.getElementById(mainImg); //null bcoz here mainImg is acting as a variable not object
document.getElementById("mainImg"); //<img src="spiderman_img.png" id="mainImg">
let imgObj= document.getElementById("mainImg");
use imObj to access in console now
console.log(imgObj);  
console.dir(imgObj);
imgObj.src  //'http://127.0.0.1:5500/JS9/spiderman_img.png'
imgObj.tagName   //'IMG'
imgObj.id    //'mainImg'
imgObj.src="creation_1.png";
*/

//selecting description with id:
// document.getElementById("description");
//console.dir(document.getElementById("description")); to check objects to use(like: tag,innertext,etc) in description tag
//console.dir(document.getElementById("abcd")); //gives null since theres no id named abcd

//2. BY CLASSNAME
/*
document.getElementsByClassName("oldImg"); //get access to class of oldImg
document.getElementsByClassName("oldImg")[0]; //gets img tag of 0th index image
document.getElementsByClassName("oldImg")[1]; //gets img tag of 1st index image
document.getElementsByClassName("oldImg")[2]; //gets img tag of 2nd index image
or directly:
let smallImages = document.getElementsByClassName("oldImg");
for(let i = 0;i<smallImages.length;i++){
    console.dir(smallImages[i]); //to get individual objects of all 3 images
    console.dir(smallImages[i].src);
    smallImages[i].src="spiderman_img.png";
    console.log(`value of image number ${i} is changed`);
}
if used document.getElementsByClassName("ancdef"); //we don't get null here rather a HTML collection with length :0
*/

//3. BY TAGNAME
/*
document.getElementsByTagName("p"); //we get 2 elements 0th index at About section(with no id) and other 1st index of Creation & Development(with id #description)
document.getElementsByTagName("p")[1].innerText="abc";  //to change the content inside C&D into just abc
document.getElementsByTagName("span");  //we don't get null here rather a HTML collection with length :0 since span/italic are not declared here
*/


//  QUERY SELECTORS
/*
console.dir(document.querySelector('p')); //Selects first p element (here About section only)
console.dir(document.querySelector('#description')); //Selects first element with id = description
console.dir(document.querySelector('.oldImg')); //Selects first element with class = oldImg
console.dir(document.querySelector("div a")); //selects first anchor tag inside first paragraph tag
//to use all
console.dir(document.querySelectorAll('p')); //selects all p tags
console.dir(document.querySelector('.oldImg')); //Selects first element with class = oldImg
console.dir(document.querySelectorAll("div a")); //Selects all anchor tag
*/
/*
three most important properties -1 innerText 2. textContent 3. innerHTML
let para = document.querySelector('p');
para -> to get <p>...</p>
para.innerText; //to print text inside About section
para.innerHTML;
para.textContent;  //defines how text is defined inside our html content not on webpage
now since we now did- style display none before Marvel Comics therefore we can see it on textContent but not on innerText/webpage
para.innerText="Hi! I'm Peter Parker"; //changes to this only
para.innerText="Hi! I'm <b>Peter Parker</b>"; //prints - Hi! I'm <b>Peter Parker</b> since bold tag is not recognized by innerText
para.innerHTML="Hi! I'm <b>Peter Parker</b>";  //now peter parker will be bold
//tp underline heading:
let heading = document.querySelector('h1');
//heading.innerHTML = "<u>Spider Man</u>";
//method-2*** (no need to watch and learn heading name)
heading.innerHTML= `<u>${heading.innerText}</u>;
*/

//MANIPULATING ATTRIBUTES(GETTERS AND SETTERS)
/*
let img = document.querySelector(`img`);
img.getAttribute(`id`);
img.setAttribute(`id`,`spidermanImg`);  //id name changes using this and after doing this styling uski hat jayegi
img.setAttribute(`src`,"creation_3.jpeg");
img.getAttribute(`class`);
img.setAttribute(`class`,`images`); //id name changes using this
*/

//MANIPULATING STYLES
/*
let heading = document.querySelector('h1');
heading.style.color ='purple'; //peter parker in purple
heading.style.backgroundColor = 'yellow';  //like in case of css we have hyphon "-" so here we use camelCase to write styles
//styling under links of publication info
let links = document.querySelectorAll(".box a");
// for(let i=0;i<links.length;i++){
//     links[i].style.color = "green";
// }
//or directly using for of loop
for(link of links){
    link.style.color="green"; //stored inside inside style not in external css file , therefore not preferred 
}
//let box = document.querySelector('.box');
//box.style //does not contains any style e.g will not show which color is used in background color or else since this is not defined inside inline style
//Hence , styling is not preferred much bcoz all our styles in css are mostly done on external styling not inline styling (and console objects shows only for inline styling)
*/

//classlist - gives the number of classes an element have
/*
let heading1 = document.querySelector('h1');
heading1.classList.add('green'); //color changes to green since in css file we made .green class
heading1.classList.add('underline');   //used to add class  
heading1.classList.remove('green');  //used to remove class
//heading1.setAttribute('class','green');  //green aaya but underline hat gaya thats why we dont use setAttribute for styling purposes cuz ek time me ek hi class ki value ho sakti hai
heading1.classList.contains("underline"); //true  //used to check if class exist
//toggle - in between add and remove i.e if something is yes then it turns to no and vice versa 
//heading1.classList  //use this to check how many are present
//we saw that we only have underline present therefore on typing this we get true (return opposite):
//heading1.classList.toggle("green"); //true (now it adds it)
//heading1.classList.toggle("underline"); //false
*/

//Navigation
/*
let h4 = document.querySelector('h4');
h4.parentElement //gives <div class="box">..</div>
h4.children //gives HTML collection with nothing since nothing is there inside h4 tag
//but for div tag box
let box = document.querySelector(".box");
box.children; //2 h4,ul
box.childElementCount;  //2
let ul = document.querySelector('ul');
ul.parentElement; //div class of box
ul.childrenElementCount; //3 (li li li)
ul.children[2].previousElementSibling; //gives for ul.children[1];
ul.children[2].nextElementSibling; //gives for ul.children[2];
//so we can access heading image using image not h1 tag since both are siblings
let img = document.querySelector('img');
img.previousElementSibling; //<h1>Spider Man</h1>
img.previousElementSibling.style.color= "orange"; //Spider Man becomes orange
*/

//ADDING ELEMENTS -used to create elements and after creating we insert them
document.createElement('p'); //new paragrapg created <p></p>
let newP = document.createElement('p');
console.dir(newP); //to check all items in p (mostly all null)
newP.innerText= "Hi! I'm a new P";
//now to insert this in a body tag
let body = document.querySelector('body');
body.appendChild(newP); 
//to insert this into publication info box
let box = document.querySelector('.box');
box.appendChild(newP);
//creating a button inside that box:
let btn = document.createElement('button');
btn.innerText= "click me!";
box.appendChild(btn);
//to add more text or strings add
newP.append("this is new text");
//to add button on same para
newP.append(btn);
newP.append("do not click this button");
//since append last mei add krta hai so add in front we use prepend 
box.prepend(newP);  //shifts to upward of box 
//addadjacent
let btn1 = document.createElement('button');
btn1.innerHTML= "NEW BUTTON!!!"
let p = document.querySelector('p');
p.insertAdjacentElement('beforebegin',btn1); //to insert beginning of the para(before para)
p.insertAdjacentElement('afterbegin',btn1); //at start of the para
p.insertAdjacentElement('beforeend',btn1);  //in para but at last
p.insertAdjacentElement('afterend',btn1);  //at last of para (outside para)
//now to remove this button check its parent here it is body therefore select it and remove btn1:
let body1 = document.querySelector('body');
body1.removeChild(btn1); //button removed
//or directly we can use :-
p.insertAdjacentElement('afterend',btn1);
btn1.remove();
//p.remove();  //whole para removed
//body.remove();  //everything removed so use it wisely