//in fetch - when we were getting data then that data was not exact json data, therefore we needed it to parse it first
/*AXIOS - library to make HTTP requests (use source script link in html)

let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);
    } catch(e){
        console.log("error -", e);
    }
 }
*/
/*
let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#output");
    p.innerText = fact;
});

async function getFacts(){
    try{
        let res = await axios.get(url);
       return res.data.fact;
    } catch(e){
        console.log("error -", e);
        return "No fact found";
    }
 }
*/
/*
let url2 = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{
    let link = await getImage();
    //console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src",link);
    console.log(link);
});

async function getImage(){
    try {
        let res = await axios.get(url2);
        return res.data.message;  //jab tak khud se console me check nhi karoge ki image section kis block/file me hai ye khud se nhi likh sakte ho!
    } catch (e) {
        console.log("error - ",e);
        return "/";
    }
}
*/
//Note : in case of APIs, since they are not free therefore we might get only 15 calls in 1 minute ,etc and if you access it repeatedly using loops then then the owner of the site might ban you
//therefore dont misuse it call for limited only

/*Passing headers within AXIOS request:
const url = "http://icanhazdedjoke.com/";
async function getJokes(){
    try{
        const config = {headers: {Accept:"application/json"}}; //to get in json format
        let res = await axios.get(url+ config);
        console.log(res.data);
    }catch (err){
        console.log(err);
    }
}  
*/

//Activity using Query Strings in axios
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
  let colArr = await getCollege(country);
  console.log(colArr); 
  show(colArr);
});

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText = "";  //to make sure jis country ka search ho uska hi aaye , if we'll not use this then we prev country ke baad hi append(continue) ho jayega
    for (col of colArr){
        console.log(col.name); 
        let li = document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}

async function getCollege(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    } catch (e) {
        console.log("error : ",e);
        return [];
    }
}
//Homework : country fixed then on basis of states find out colleges (state province mention in json file check in hollscoth)