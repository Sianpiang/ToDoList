import express from "express"
import { createToDo, getAllToDo, getSingleToDo, deleteToDo, updateToDo } from "../controllers/toDo.js";


const router = express.Router();

router.get('/',getAllToDo)

router.get('/:id',getSingleToDo)

router.post('/',createToDo)

router.delete('/:id',deleteToDo)

router.patch('/:id',updateToDo)

export default router