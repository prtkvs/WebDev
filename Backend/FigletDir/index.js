const figlet = require("figlet"); //no need to give ./ in case of packages

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
//NOTE : THERE'S NO NEED TO SHARE NODE MODULE ALONGWITH PROJECT , 
//therefore delete node modules and with the help of prackage.json file when we fork or clone our project
// we can directly get node modules again just by writing npm install on command prompt of this file