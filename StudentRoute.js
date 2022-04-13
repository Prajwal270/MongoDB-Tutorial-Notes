const express = require("express");
const Student = require("./student")
const router = new express.Router();

router.get("/", (req,res)=>{
    console.log(`Hello`);
    res.send("helo")
})


// REGISTRATION OF USER (USING PROMISES)

// router.post("/student", async (req,res)=>{

    // const user = new Student(req.body);
    // user.save().then(()=>{
    //     res.status(201).send(user);
    // }).catch((e)=>{
    //     res.status(400).send(e);
    //     // console.log(e)
    // }) 
// })

// REGISTRATION USING ASYNC-AWAIT
router.post("/student", async(req,res)=>{

    try{
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser)

    }catch(e){
        res.status(400).send(e)
    }

})

// Get all the student data from database  
router.get("/student", async(req,res)=>{

    try{
    const stud = await Student.find()
    res.send(stud)
    }catch(e){
        console.log(e);
    }
})

// GET INDIVIDUAL STUDENT DATA USING ID

router.get("/student/:id", async(req,res) =>{

    try{
        const pstd = await Student.findById(req.params.id)

        if(!pstd) {
            return res.status(404).send("User not found");
        }

        res.send(pstd)
    }catch(e){
        res.status(500).send(e)
    }
})

// GET INDIVIDUAL STUDENT DATA USING NAME

// router.get("/student/:name", async(req,res)=>{
//     try{
//         const stent = await Student.findOne({name : req.params.name});

//         res.send(stent)

//     }catch(e){
//         res.status(500).send(e)
//     }
// })

// UPDATING INDIVIDUAL STUDENT DATA USING THEIR ID

router.patch("/student/:id", async (req,res)=>{
    try{
        const upd = await Student.findByIdAndUpdate(req.params.id,req.body,{
            new : true
        });
        res.send(upd)

    }catch(e){
        res.status(400).send(e)
    }
})

// DELTING INDIVIDUAL STUDENT DATA USING THEIR ID

router.delete("/student/:id", async(req,res) =>{

    try{
        const del = await Student.findByIdAndDelete(req.params.id);

        if(!req.params.id){
            return res.status(400).send("Id is invalid")
        }
        res.status(200).json({
            success: true,
            message : "Product Deleted Successfully",
            del
        })
    }catch(e){
        res.status(400).send(e)
    }
})
    
    


module.exports = router;


