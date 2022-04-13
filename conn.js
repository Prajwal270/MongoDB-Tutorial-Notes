const mongooose = require("mongoose");

mongooose.connect("mongodb://localhost:27017/studentdb").then(()=>{
    console.log('Connection to db is successfull');
}).catch((e)=>{
    console.log("No Connection");
})

