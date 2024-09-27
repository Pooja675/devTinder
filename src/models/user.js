const mongoose = require("mongoose")

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
        trim: true
    },

    password: {
        type: String,
        required: true,
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
        default: "https://i.pinimg.com/564x/8a/01/cc/8a01cc0579be056ecc8dfa2f07bd42aa.jpg"
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