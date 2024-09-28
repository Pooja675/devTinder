const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50
    },
    
    lastName: {
        type: String,
    },

    emailId: {
        type: String,
        required: true,
        lower: true,
        unique: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid EmailId:" + value)
            }
        }

    },

    password: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Your password is not strong:" + value)
            }
        }
    },

    age: {
        type: Number,
        min: 18
        
    },

    gender: {
        type: String,
        validate(value) {
            if(!["male", "female", "others"].includes(value)) {
                throw new Error ("Gender data is not valid.")
            }
        }
       
    },
    photoUrl:{
        type: String,
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid photoURL:" + value)
            }
        }
    }, 
    about: {
        type: String,
        default: "This is a default about a user"
    },
    skills: {
        type: [String]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)