import { isValidObjectId } from "mongoose";
import toDoList from "../models/toDo.js"
import jwt from "jsonwebtoken"

const getAllToDo = async(req,res)=>{
    try {
        const token = req.token;
        const decodedToken = jwt.verify(token,process.env.SECRET);
        console.log(userId);
        if(!decodedToken){
            res.status(401).json({msg:"Invalid token"})
        }
        const getToDo = await toDoList.find().populate("userId",{username:1,email:1});
        res.status(200).json(getToDo);
    } catch (error) {
        console.log(error);
    }
}

const createToDo = async(req,res)=>{
    const {content,status} = req.body
    try {
        const token = req.token;
        const decodedToken = jwt.verify(token,process.env.SECRET);
        if(!decodedToken){
            res.status(401).json({msg:"Invalid token"})
        }
        const newToDo = new toDoList({
            content,
            status,
            userId:decodedToken.userId
        })
        const addToDo = await newToDo.save();
        res.status(201).json(addToDo)
    } catch (error) {
        console.log(error);
    }
}

const getSingleToDo = async(req,res)=>{
    const {id} = req.params
    try {
        const token = req.token;
        const decodedToken = jwt.verify(token,process.env.SECRET);
        if(!decodedToken){
            res.status(401).json({msg:"Invalid token"})
        }
        if(!isValidObjectId(id)){
            res.status(400).json({msg:"Invalid id type"})
        }
        const getToDo = await toDoList.findById(id);
        res.status(200).json(getToDo)
    } catch (error) {
        console.log(error);
    }
}

const deleteToDo = async(req,res)=>{
    const {id}=req.params
    try {
        const token = req.token;
        const decodedToken = jwt.verify(token,process.env.SECRET);
        if(!decodedToken){
            res.status(401).json({msg:"Invalid token"})
        }

        if(!isValidObjectId(id)){
            res.status(400).json({msg:"Invalid id type"})
        }
        const toDoDelete = await toDoList.findByIdAndRemove(id);
        if (!toDoDelete){
            return res.status(404).json({msg:"To-do not found"})
        }
        res.status(204).end();
    } catch (error) {
        console.log(error);
    }
}

const updateToDo = async(req,res)=>{
    const {id} =req.params
    const {content,status}=req.body
    try {
        const token = req.token;
        const decodedToken = jwt.verify(token,process.env.SECRET);
        if(!decodedToken){
            res.status(401).json({msg:"Invalid token"})
        }

        if(!isValidObjectId(id)){
            res.status(400).json({msg:"Invalid id type"})
        }
        const updatedToDo = {
            content,
            status
        }
        const update = await toDoList.findByIdAndUpdate(id,updatedToDo,{new:true})
        res.status(200).json(update)
    } catch (error) {
        console.log(error);
    }
}

export {
    getAllToDo,
    getSingleToDo,
    createToDo,
    deleteToDo,
    updateToDo
}