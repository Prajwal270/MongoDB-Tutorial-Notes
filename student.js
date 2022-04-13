const mongooose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongooose.Schema({
    name :{
        type : String,
        required : true,
        // minlength : 7,
        // maxlength : 20
    },
    email : {
        type : String,
        required : true,
        unique : [true, "Email id already Present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Error")
            }
        }
    },
    phone :{
        type : Number,
        // min : 5,
        // max : 10,
        // unique : true 
    },
    address : {
        type : String,
        required : true,
    }
});

// export the model 
const Student = new mongooose.model("Student", studentSchema);

module.exports = Student