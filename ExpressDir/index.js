const express = require("express");
const app = express();
// console.dir(app);

//listen - method that creates a web server which listens for incoming api calls
let port = 8080;    //3000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res)=>{
//     console.log("request received");
//     //res.send("this is a basic response");
//     // res.send({
//     //     name : "apple",
//     //     color: "red"
//     // });
//     // let code = "<h1>Fruits</h1> <ul><li>apple</li><li>mango</li><li>banana</li></ul>";
//     // res.send(code);
// });

//use one wither get or use cant use simultaneously
       app.get("/",(req,res)=>{
        res.send("this is root path");
       });
       app.get("/apple",(req,res)=>{
        res.send("you contacted apple path");
       });
       app.get("/orange",(req,res)=>{
        res.send("you contacted orange path");
       });
    //    app.get("*",(req,res)=>{
    //     res.send("you contacted some path, this path does not exist");
    //    });  
       app.post("/",(req,res)=>{
        res.send("you sent a post request");  //send post using hoppscoth
       });
       
       
       app.get("/:username/:id",(req,res)=>{        //cant use this if your are using * one
        //console.log(req.params); //req.params - it shows the pparameters of their request
        let {username,id} = req.params;
        let htmlStr =  `<h1>Welcome to the page of @${username}!</h1>`;
        res.send(htmlStr);
       });


      app.get("/search",(req,res)=>{
        // console.log(res.query); //prints all the queries that comes under request
        // res.send("no result");
        let { q } = req.query;
        if(!q){
            res.send("nothing searched");
        }
        res.send(`search results for query : ${q}`);
      }); 

//installing Nodemon globally : helps in not using ctrl+c and call again when code changes it firectly refreshes
//we already know to install globally we use = npm install -g nodemon
// use nodemon index.js 