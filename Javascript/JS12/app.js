//Async keyword
/*
async function greet(){
    throw "404 not found";      //return promises
    return "hello";             //return promises
}   
greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was",result);
})
.catch((err) => {
    console.log("promise was rejected with error :",err);
});

let demo = async() =>{
    return 5;
};      //demo(); return promise
*/

//await keyword (used only with async)

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}
async function demo(){
    await getNum();   //if we had directly written getNum(); only then teeno ek saath within 1 sec aa jate, with the help of await keyword we allowed it to come after one then after (in 1 sec interval)
    await getNum();
    await getNum();
}           //demo(); use this to see

//now minimising the color code with await keyword (previous lecture)
h1= document.querySelector("h1");
function changeColor(color,delay){  //we didnt used - nextColorChange since jaise database wale me success aur failure wale callback lena band kr diye the
    return new Promise((resolve,reject)=>{   //very rare chances that this code will fail
    setTimeout(()=>{
    let num = Math.floor(Math.random()*5)+1;
    if(num>3){
        reject("promise rejected");
    }    

    h1.style.color = color;
    console.log(`color changed to ${color}!`);
    resolve("color changes!");
    },delay);
    });
}
/*
async function demo1(){
    await changeColor("red",1000);
    await changeColor("green",1000);
    await changeColor("blue",1000);
    await changeColor("orange",1000);

    //Handling Rejections- not depended on promises still does not get executed if rejected
    //Therefore we'll use try and catch method to overcome this as if agar ki error aa gya to catch usko sambhal lega
    let a = 5;
    console.log(a);
    console.log("new number=",a+3);
}       //demo1(); use this to see
 */

async function demo1(){
    try {
    await changeColor("red",1000);
    await changeColor("green",1000);
    await changeColor("blue",1000);
    await changeColor("orange",1000);
    }

    catch (err) {
        console.log("error caught");
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new number=",a+3);
    //rejection resolved
}


/*
API(Application Programming Interface) :-
prime example of an API is when you like a photo in instagram then without reloading or bina website me kuch change hue ,heart gets red!
since user server ko acces nhi krta wo APIs ko acces kr pata hai
APIs act as a layer in between user and the server (in which user sends request and from server through API we give respose to user)
APIs dealing with https protocol are called WebAPI (in webdev we study about WebApi)
Some random APIs:
1. catfact.ninja/fact
2. boredapi.com/api/activity
3. dog.ceo/api/breed/image/random
*/

/*JSON (Javascript Object Notations) www.json.org
it doesnt mean ki sirf javascript ke ander json hota hai ,basically json ek format hai hum kabhi bhi agar data return krenge to woh json format me hi hota hai.
JSON looks similar to JS objects but it has two differences:
1. key written in json are in string format
2. undefined value throws error in json but not in js
*/
//Parsing JSON data:  (json data -> js object)
let jsonRes = `{"fact":"Cats can predict earthquakes. We humans are not 100% sure how they do it. There are several different theories.","length":111}`;
let validRes = JSON.parse(jsonRes);    //To parse a string data into a Js object
console.log(validRes.fact); //using parse now we can access fact as like our normal js objects
//Stringify JSON data: (js objects -> JSON data) 
let student = {
    name : "aman",
    marks : 98
}
// in console - JSON.stringify(student);       //'{"name":"aman","marks":98}'..

/*Testing API requests:(tools)
1. Hoppscoth 2. Postman(requires sign in therefore we use hoppscoth)
*/

//AJAX (asynchronous javascript and XML) - overall process in which we request our api and get data
//Why AJAX - coz when er are requesting APIs through our javascript then Apis are working asynchronously and return the response in JSON format (it was used to XML at older times therefore it's ajax but actually it's AJAJ)

/*HTTPS Verbs:
1. GET : whenever we put api link in format of https in hollscoth it converts it into json format , this process of getting is GET
2. POST : alongwith our api request when we post our data also
3. DELETE : we use it to delete our api request
(we'll use this when we make our custom api into work)
*/

/* Status Codes (Main Examples):-
1. 200 - OK (when api call is success)
2. 404 - Not Found (when that api does not exit)
3. 400 - Bad request
4. 500 - Internal Server Error (error from the server side of api)
*/
/*
Adding information in URLs 
Query Strings - https://www.google.com/search?q=harry+porter
where ?q= means query string which allows extra information inside that url(here, we used harry porter using this url to serch harry porter in google without actually writing it on searchbox) 
in above link q = key , harry+porter = value
?name=shraddha&marks=95 - example
Note: if in any query string something is unrecognizable in API call then it ignores it and and based on useful info it gives results
*/

// document.write("hello");

let url = "https://catfact.ninja/fact";
/*
async function getFacts(){
   // let res = fetch(url); //since asynchronous function //will give undefined since it will take some time to call api but this statement will put immediately
    let res = await fetch(url);
    let data = await res.json(); //since asynchronous function
   // console.log(data);
    console.log(data.fact);
} //call getFacts in console
*/
//if url is wrong so use try and catch
async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch(e){
        console.log("error -", e);
    }
}
