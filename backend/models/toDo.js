import mongoose from "mongoose";

const toDoSchema = mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    },
    userId:{
        type:String,
        required:true,
        ref:"User"
    }
})

toDoSchema.set('toJSON',{
    transform: (doc,returnedObj)=>{
        returnedObj.id = returnedObj._id
        delete returnedObj._id
        delete returnedObj.__v
    }
})

const toDoList = mongoose.model("toDoList",toDoSchema);

export default toDoList