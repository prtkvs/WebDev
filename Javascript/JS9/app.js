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