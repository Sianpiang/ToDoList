import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import toDoRoutes from "./routes/toDoRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import getToken from "./middleware/getToken.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT||6001
const MONGODB_URI=process.env.MONGODB_URI

app.use('/todo',getToken,toDoRoutes)
app.use('/user',userRoutes)

mongoose.connect(MONGODB_URI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server connected to ${PORT}`);
    })
})
