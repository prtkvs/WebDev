//Visualising the call stack
function one(){
    return 1;
}
 
function two(){
    return one()+one();
}

function three (){
    let ans = two()+one();
    console.log(ans);
}
three();
//you know the rizz how it's stack will be performed
//to check it by debugging goto sources tab -> breakpoints -> select breakpoint (three()) (by clicking that number of the line)->refresh ->check on call stack by pushing down


//JS is Single Threaded - matlb if any code is written then at one time only one thing will execute

//1. Synchronous Nature

/*
let a = 10;
console.log(a);
let b = 20;
console.log(b);
console.log(a+b);  //executing the code line by line to maintain it's synchronous nature
*/

//2. Js as Asynchronous Nature - acheived via CallStack (which controls api requests and database management)

/*
setTimeout(()=>{
    console.log("Mera College");
},2000);
setTimeout(()=>{
    console.log("Hello Again");
},2000);
console.log("hello");
*/

//Note: How come js waited and put both at same time whenit is single threaded? - just because callbacks in setTimeout is not controlled by js it is maintained via Browser and browser holds it for time mentioned and give it to the js and js immediately execute it.

//Main drawback of JS asynchronous nature :-
//Callback Hell
/*
h1= document.querySelector("h1");

setTimeout(()=>{
    h1.style.color = "red";
},1000);
setTimeout(()=>{
    h1.style.color = "orange";
},2000);
setTimeout(()=>{
    h1.style.color = "green";
},3000);
*/
//bad way to writing this as again and again ,use function
/*
function changeColor(color,delay){
    setTimeout(()=>{
    h1.style.color = color;
    },delay);
}
changeColor("red",1000);
changeColor("orange",2000);
changeColor("green",3000);
*/

//due to its dependent nature that pehle red then orange then green with calculated timings therefore we will use callbacks as nesting
/*
function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
    h1.style.color = color;
    if(nextColorChange) nextColorChange();
    },delay);
}
changeColor("red",1000,()=>{
    changeColor("orange",1000,() => {         //no need to care about red color timing
    changeColor("yellow",1000,() => {
    changeColor("blue",1000,() =>{
    changeColor("gren",1000,() =>{
                });
            });
        });
    });
});
*/
//This is called callbacks nesting -> callback hell

/*
function savetoDb(data){
    let internetSpeed = Math.floor(Math.random()*10)+1; //in range [1,10]
    if(internetSpeed>4){
        console.log("your data was saved .",data);
    }else{
        console.log("weak connection.data not saved.try again !")
    }
}   //use - savetoDb("mera college"); to check
*//*
   function savetoDb(data,success,failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed<4){
        success();
    }else{
        failure();
    }
   }
*//*
savetoDb("apna college",
    ()=>{
    console.log("Success: your data was saved");
    },
    ()=>{
    console.log("Failure : data not saved. Weak Connection . try again!");
   }
);
//just refresh and check 
*/
//actual hell is this:
/*
savetoDb(
    "mera college",
    ()=>{
        console.log("success: your data was saved");
        savetoDb(
            "hello World",
            ()=>{
                console.log("success2: data2 was saved");
                savetoDb(
                    "prtk",
                    ()=>{
                        console.log("success3: data3 was saved");
                    },
                    ()=>{
                        console.log("failure3: weak connection");
                    }
                );
            },
            ()=>{
                console.log("failure2 : weak connection");
            }
        );
    },
    ()=>{
        console.log("failure: weak connection");
    }
);
*/
//1.failure 2.data 1 saved and failure 2 3. data 1,2 saved 3 failure 4. data 1,2,3 all saved

//to resolve this drawback of callback hell(note:this type of callback nesting still exist on industry level):-

//we use Promises - 1.async 2. await
//Promises - the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

function savetoDb(data){
    return new Promise((success,failure)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            success("sucess: data was saved");
        } else{
            failure("failure: weak connection");
        }
    });
}   //use savetoDb("mera college");  //2 options : 
/* 1.
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "sucess: data was saved"

2.
[[PromiseState]]: "rejected"
[[PromiseResult]]: "failure: weak connection"
*/
//Then() and catch()
//then() is used when promise fulfilled and catch() when promise is rejected
/*
let request = savetoDb("mera college"); //request is promise object
 request.then(()=>{
    console.log("promise was resolved");
    console.log(request);
 })
 .catch(()=>{
    console.log("promise was rejected");
    console.log(request);
 });
 *//*
savetoDb("apna college")
.then(()=>{
    console.log("data1 saved.");

    savetoDb("helloworld").then(() => {
        console.log("data2 was saved");
    });

})
.catch(()=>{
    console.log("promise was rejeected");
}); 
*///looks like nested callback only so we use like this:

//Improved Version :- 
savetoDb("apna college")
.then((result) => {
    console.log("data1 saved");
    console.log("result of promise: ",result);
    return savetoDb("hello world");
})
.then(()=>{
    console.log("data2 saved");
    console.log("result of promise: ",result);
    return savetoDb("hello again");
})
.then(()=>{
    console.log("data3 saved");
    console.log("result of promise: ",result);
})
.catch((error)=>{
    console.log("promise was rejected");
    console.log("error of promise: ",error);
});

//Let's apply promises to our callback hell
h1= document.querySelector("h1");
function changeColor(color,delay){  //we didnt used - nextColorChange since jaise database wale me success aur failure wale callback lena band kr diye the
    return new Promise((resolve,reject)=>{   //very rare chances that this code will fail
    setTimeout(()=>{
    h1.style.color = color;
    resolve("color changes!");
    },delay);
    });
}
//let requestPromise = changeColor("red",5000); //Promise state pending (till 5 seconds)


// changeColor("red",1000,()=>{
//     changeColor("orange",1000,() => {         
//     changeColor("yellow",1000,() => {
//     changeColor("blue",1000,() =>{
//     changeColor("gren",1000,() =>{
//                 });
//             });
//         });
//     });
// });

//Now how to prevent this above callback hell? :-
changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color was completed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue color was completed");
    return changeColor("pink",1000);
})
.then(()=>{
    console.log("pink color was completed");
    return changeColor("purple",1000);
})
.then(()=>{
    console.log("purple color was completed");
    return changeColor("yellow",1000);
})
.then(()=>{
    console.log("yellow color was completed");

});