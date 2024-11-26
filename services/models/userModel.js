import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username: {
        type: String,
        required: true,
    },
    gender:{
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    userprofile: {
        type: String
    }
},{
    timestamps: true,
})

const userModel = mongoose.model('user',userSchema)
export default userModel;