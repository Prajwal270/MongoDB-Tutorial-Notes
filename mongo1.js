

// Playlist : https://www.youtube.com/watch?v=XeDM28c5kO4&list=PLwGdqUZWnOp1P9xSsJg7g3AY0CUjs-WOa&ab_channel=ThapaTechnical


// database => collections => documents => fields => values => data => data type => data type value 



//-----------------------------------------
// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("hello");
// });

// app.listen(8080);
//---------------------------------------

// const mongoose = require("mongoose")

// mongoose.connect("mongodb://localhost:27017/tchnl",)
// .then(()=> console.log("coonection successfull")).catch((err) => console.log(err));
//----------------------------------------------------------------------------------------

// A Mongoose Schema defines the structure of the doucment,
// default values, validators, etc.,

// const playlistSchema = new mongoose.Schema({
//     name:{
//         type: String,
//         required : true
//     },
//     ctype : String,
//     videos : Number,
//     author : String,
//     active : Boolean,
//     date : {
//         type : Date,
//         default : Date.now
//     }
// })

// With the help of Schema we need to create a model

// A Mongoose MOdel is a wrapper on the Mongoose schema.
// A Mongoose schema defines the structure of the document,
// default values, validators, etc., whereas a Mongoose Model
// provides an interface to the database for creating,
// querying , updating , deleting records etc. 


// collection creation 
// const Playlist = new mongoose.model("Playlist", playlistSchema);

// Now with the help of Model, we will create a collection 


// VIDeo 1 to 11 => written in ntoes
// -------------------------------------------------------------------------------------------
// VIDEO : 12 (Create and Insert the Documents using Express in MOngoDB using Mongoose)


// const mongoose = require("mongoose")

// mongoose.connect("mongodb://localhost:27017/tchnl",)
// .then(()=> console.log("coonection successfull")).catch((err) => console.log(err));

// const playlistSchema = new mongoose.Schema({
//     name:{
//         type: String,
//         required : true
//     },
//     ctype : String,
//     videos : Number,
//     author : String,
//     active : Boolean,
//     date : {
//         type : Date,
//         default : Date.now
//     }
// })

// const Playlist = new mongoose.model("Playlist", playlistSchema);

// const createDocument = async () => {
//     try {
//     const reactPlaylist = new Playlist ({
//         name : "NOde JS",
//         ctype : "Back ENd",
//         videos : 12,
//         author: "Theie",
//         active:false,
        
//     })
//     const result = await reactPlaylist.save();
//     console.log(result);
//     }catch (err){
//         console.log(err);
//     }

// }
// createDocument();


// -------------------------------------------------------------------------------------------
// VIDEO : 13 (How to insert Multiple Documents using ONe Line in Mongoose )

const { application } = require("express");
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/tchnl",)
.then(()=> console.log("connection successfull")).catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    ctype : String,
    videos : Number,
    author : String,
    active : Boolean,
    date : {
        type : Date,
        default : Date.now
    }
})

const Playlist = new mongoose.model("Playlist", playlistSchema);

const createDocument = async () => {
    try {
    const jsPlaylist = new Playlist ({
        name : "javascript",
        ctype : "front",
        videos : 120,
        author: "newone",
        active:true,
        
    })
    const mongoPlaylist = new Playlist ({
        name : "Mongo",
        ctype : "Database",
        videos : 129,
        author: "another",
        active: true,
        
    })
    const monPlaylist = new Playlist ({
        name : "Mongoose",
        ctype : "Database",
        videos : 3,
        author: "iloir",
        active: false,
        
    })
    const result = await Playlist.insertMany([jsPlaylist,mongoPlaylist,monPlaylist]);
    console.log(result);
    }catch (err){
        console.log(err);
    }

}
// createDocument();



// -------------------------------------------------------------------------------------------
// VIDEO : 14 (How to Read or Query the Documents uisng Mongoose)

// const getDocument = async () =>{
//     try{
// //    const result = await Playlist.find() // to get all the documents
//     // const result = await Playlist.find({ctype : "Front End"}) // to get only document which have ctype = Front End
//     // const result = await Playlist.find({ctype : "Front ENd"}).select({name:1}) // to only get  name field where the given condition is true
//     const result = await Playlist.find({ctype : "Front ENd"}).select({name:1}).limit(1) // to get only one (i.e. first match found)

//    console.log(result)
//     }catch(err){
//         console.log(err)
//     } 
// }
// getDocument();

// -------------------------------------------------------------------------------------------
// VIDEO : 15 (MongoDB Comparision Query Operation using Mongoose and Node(ExpressJS)

// Comparision Operator in Mongoose : 

// $eq  :  equal to
// $gt  :  greater than
// $gte :  greater than or equal to 
// $in  :  match any of the value specified in an array 
// $lt  :  less than
// $lte :  less than or equal to 
// $ne  :  not equal to 
// $nin :  matches none of the values specified in an array

//-------------------------------------------------------------------------------------------------

// const getDocument = async () =>{
//     try{
//         // const result = await Playlist.find({videos : 120} )
//         // const result = await Playlist.find({videos : {$gte : 120} })
//         // const result = await Playlist.find({videos : {$gt : 120} })
//         // const result = await Playlist.find({ctype : "Database" })

//         // const result = await Playlist.find({ctype : {$in : ["Database"] }})
//         // const result = await Playlist.find({ctype : {$in : ["Database","front"] }})
//         // const result = await Playlist.find({ctype : {$nin : ["Database","front"] }})

//    console.log(result)
//     }catch(err){
//         console.log(err)
//     } 
// }
// getDocument();


// -------------------------------------------------------------------------------------------
// VIDEO : 16 (MongoDB Logical Query Operators using MOngoose)

// $and : returns all documents that match the conditions of both clauses
// $not : Inverts the effect of a query expression and returns documents that do not match the query expression.
// $nor : returns all documents that fail to match both clauses.
// $or  : returns all documents that match the conditions of either clause.

// const getDocument = async () =>{
//     try{
//         // const result = await Playlist.find({$or : [{ctype: "Back ENd"},{author:"Thapa"}]})
//         const result = await Playlist.find({$and : [{ctype: "Back ENd"},{author:"Thapa"}]})

//    console.log(result)
//     }catch(err){
//         console.log(err)
//     } 
// }
// getDocument();

// -------------------------------------------------------------------------------------------
// VIDEO : 17 (Mongoose Query Sorting and Counting)

// .countDocuments() => gives out the number of values, satifying the condition

// const getDocument = async () =>{
//     try{
//         // const result = await Playlist.find({$or : [{ctype: "Back ENd"},{author:"Thapa"}]}).countDocuments() // 3
//         //  const result = await Playlist.find({active : true}).sort("name : 1") 
//         //  const result = await Playlist.find({active : true}).sort({name : 1}) 
//          const result = await Playlist.find({active : true}).sort({name : -1}) 

//    console.log(result)
//     }catch(err){
//         console.log(err)
//     } 
// }
// getDocument();

// -------------------------------------------------------------------------------------------
// VIDEO : 18(UPDATE Document) (Mongoose CRUD UPDATE Query)

// const updateDoc = async (_id)=> {

//     try{
//     const result = await Playlist.updateOne({_id},{
//         $set : {name : "Javascript"}
//     });
//     const result = await Playlist.findByIdAndUpdate({_id},{
//          $set :{name:"Python"} 
//     })
//     console.log(result);

//     }catch (err) {
//         console.log(err)
//     }
// }
// updateDoc("617a56a0bcb6845d8c90bdc1")

// ----------------------------------------------------------------------------------------------
// VIDEO : 19 (DELETE Document) (Mongoose CRUD DELETE QUERY)

// const delDoc = async (_id) => {
//     try{
//         // const result = await Playlist.deleteOne({_id}) 
//         const result = await Playlist.findByIdAndDelete ({_id});
//         console.log(result);
//     }catch(err) {
//         console.log(err)
//     }
// }


// delDoc("617a5270e00e78c631d7a061")



// --------------------------------------------------------------------------------------------------
// VIDEO : 20 (Mongoose Built in Validation )

// Validation -> Nothing but just specifing what 
//datatype,
//lenght(in case of Number),
// LowerCase or UpperCase,
// a particular field can take.

// valid SchemaTypes in Mongoose :

// 1. String: lowercase, uppercase, trim, match, enum, minlength, maxlength
// 2. Number: min, max, enum
//    Date, Buffer, Boolean, Mixed, ObjectId,Array,
//    Decimal128, Map, Schema

// LINK : https://mongoosejs.com/docs/validation.html

//------------------------------------------------------

// const playlistSchema = new mongoose.Schema({
//     name:{
//         type: String,
//         required : true,
//         unique:true,
//         lowercase:true,
//         trim : true,
//         minlength : [5,"minimum 5 letter is required"], 
//         maxlength: 30  
//     },
//     ctype :{
//         type : String,
//         required : true,
//         lowercase : true,
//         enum : ["frontend", "backend", "database"]// value should be from these three only
//     },
//     videos : Number,
//     author : String,
//     active : Boolean,
//     date : {
//         type : Date,
//         default : Date.now
//     }
// })


//---------------------------------------------------------------------------
// VIDEO : 21 (Create Your Own Custom Validation using MongoDB)


// Custom validation is declared by passing a validation function

// const playlistSchema = new mongoose.Schema({
//     videos : {
//         type: Number,
//         // validate(value){
//         //     if(value < 0) {
//         //         throw new Error("Video Count Should not be Negative")
//         //     }
//         // }

//         // Another way 
//         validate : {
//             validator : function(value){
//                 return value.length < 0
//             },
//             message :"Video count should not be Negative"
//         }
//     }, 
// })

//---------------------------------------------------------------------------
// VIDEO : 22 Using NPM Validator Package for Validation 

// NPM package name : validator 
// In the terminal : npm i validator 

//------------------------------------

// const validator = require("validator");
// const playlistSchema = new mongoose.Schema({
//     email : {
//         type : String,
//         unique : true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error("Email is Invalid");
//             }
//         }
//     }
// })
//--------------------------------------------------------------------------
// VIDEO : 23 REST API POSTMAN Tutorial 

// Just POSTMAN introduction
//-----------------------------------------------------------------------
// VIDEO : 24 What is REST API

//REpresentational State Transfer Application Progrmming Interface 

// It is a software that allows two applications to communicate with
// each other over the internet and through various devices.

// A RESTful API is an architecture style for an API that uses HTTP
// request to access and use data.
// REST is not a programming language.

// HTTP Verb        Path          Action      Used for

//  GET          /photos          index      display a list of all photos
//  GET          /phohtos/new     new        return a HTML form for creating a new photo
//  POST         /photos          create     create a new photo
//  GET          /photos/:id      show       display a specific photo
//  GET          /photos/:id/edit edit       return a HTML form for editing a photo
//  PATCH/PUT    /photos/:id      update     update a specific photo
//  DELETE       /photos/:id      destroy    delete a specific photo

//-----------------------------------------------------------------------
// VIDEO : 25 Create Your Own RESTful API 


// install express, mongoose, validator

// Files Used : app.js, conn.js, student.js
// postman


// make new collection : Student Registration
// Click on three dot -> add a request ->


// NOTE :
// You DO NOT NEED express.json() and express.urlencoded()
// for GET requests or DELETE requests. We only need it for
// post and put req.

// express.json() is a method inbuilt in express to recognize the
// incoming Request Oject as a JSON Object. This method is called
// as a middleware in your application using the code :
// app.use(express.json())

// Status Code : https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


//------------------------------------------------------------------------------
// VIDEO : 26 Build REST API using Async-Await 

// Do the same as above using Async-Await 

//--------------------------------------------------------------------------
// VIDEo : 27 (Handling GET Request in REST API) 

// Goal : just get all the student data from the database
// and show it.

// GET ALL THE STUDENTS 
// app.get("/student", async(req,res)=>{

//     try{
//     const stud = await Student.find()
//     res.send(stud)
//     }catch(e){
//         console.log(e);
//     }
// })
//----------------------------------------
// GET A PARTICULAR STUDENT DETAILS GIVEN ITS ID
// app.get("/student/:id", async(req,res) =>{

//     try{
//         const pstd = await Student.findById(req.params.id)

//         if(!pstd) {
//             return res.status(404).send("User not found");
//         }

//         res.send(pstd)
//     }catch(e){
//         res.status(500).send(e)
//     }
// })
//----------------------------------------
// get individual Student data using name
// app.get("/student/:name", async(req,res)=>{
//     try{
//         const stent = await Student.findOne({name : req.params.name});

//         res.send(stent)

//     }catch(e){
//         res.status(500).send(e)
//     }
// })
//--------------------------------------------
//--------------------------------------------------------------------------
// VIDEo : 29 Handling UPDATE Request

// app.patch("/student/:id", async (req,res)=>{
//     try{
//         const upd = await Student.findByIdAndUpdate(req.params.id,req.body,{
//             new : true
//         });
//         res.send(upd)

//     }catch(e){
//         res.status(400).send(e)
//     }
// })
//---------------------------------------------------------------------------
// VIDEO : 28 Handling DELETE Request

// app.delete("/student/:id", async(req,res) =>{

//     try{
//         const del = await Student.findByIdAndDelete(req.params.id);

//         if(!req.params.id){
//             return res.status(400).send("Id is invalid")
//         }
//         res.status(200).json({
//             success: true,
//             message : "Product Deleted Successfully",
//             del
//         })
//     }catch(e){
//         res.status(400).send(e)
//     }
// })
//------------------------------------------------------------------------
// VIDEO : 30 Adding Experss Router in RESTful API 

// Goals : keep all the route in a seperate file,
// and then require it in app.js

// STEPS :
// 1. Create a new router
const router = new express.Router();

// 2. we need to define the router 
router.get("/thapa",(req,res)=>{
    res.send("Hello")
})
// 3. we need to register our router
app.use(router);

//Now
// Create new file : StudentRoute.js
// Inside this file : require router, Student, express
// Copy all the router from app.js to this file and 
// change name from "app" to => "router"

//-------------------------------------------------------------------------

// VIDEO : 31 Build Complete RESTFul API with NodeJS, Experss, MongoDB,
// Mongoose & Postman 


//---------------------------------------------------------------------------
// VIDEO : 32 Complete Registration Form using HTML, CSS, NodeJS Express and MongoDB

// make new Folder : mernbackend
// npm init -y
// install express, mongoose, hbs(template engine)
// make folders : src
// inside this folder : db, models , app.js

// Make new Folder : public 
// inside public make new file : index.html

// Now inside app.js
// const path = require("path")

// const static_path = path.join(__dirname, "../public");

// app.use(express.static(static_path))

//------------------------------------------------------------------------------------