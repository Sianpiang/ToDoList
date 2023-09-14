import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

import User from "../models/user.js";

const createUser = async(req,res)=>{
    const {username,email,password}= req.body
    const passHash = await bcrypt.hash(password,12);
    try {
        const newUser = new User({
            username,
            email,
            password:passHash
        })
        const userList = await newUser.save();
        res.status(201).json(userList)
    } catch (error) {
        console.log(error);
    }
}

const loginUser = async(req,res)=>{
    const {email,password}=req.body
    try {
        const user = await User.findOne({email})
        const isPasswordCorrect =!user?false:await bcrypt.compare(password,user.password);
        if(!user){
            res.status(401).json({msg:"Invalid email"});
        }
        if(!isPasswordCorrect){
            res.status(401).json({msg:"Invalid password"});
        }
        const UserInfo = {
            username:user.username,
            userId:user._id
        }
        const userToken = jwt.sign(UserInfo,process.env.SECRET)
        res.status(200).json({userToken,username:user.username,email:user.email,UserId:user._id})
    } catch (error) {
        console.log(error);
    }
}

export {
    createUser,
    loginUser
}