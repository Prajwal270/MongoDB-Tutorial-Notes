const express = require("express");

const port = process.env.PORT || 3000;
require("./conn")


const app = express();
app.use(express.json())

app.use(require("./StudentRoute"))


app.listen(port,()=>{
    console.log(`connnection at ${port}`);
})