import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
})

userSchema.set('toJSON',{
    transfrom:(doc,returnedObj)=>{
        returnedObj.id=returnedObj._id
        delete returnedObj._id
        delete returnedObj.__v
    }
})

const User = mongoose.model('User',userSchema);

export default User;