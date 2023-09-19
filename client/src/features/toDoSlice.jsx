import { createSlice } from "@reduxjs/toolkit";
import { createToDo } from "../services/todo";

const toDoSlice = createSlice({
    name:"toDo",
    initialState:[],
    reducers:{
        setToDo:(state,action)=>{
            return action.payload
        },
        addToDo:(state,action)=>{
            state.push(action.payload)
        }
    }
})


export const add = (content,token)=>{
    return async (dispatch) => {
        const toDo = await createToDo(token,content)
        console.log(toDo);
        dispatch(addToDo(toDo))
    }
}

export const getToDoList = (state)=>state.toDo;

export const {setToDo,addToDo}= toDoSlice.actions
export default toDoSlice.reducer;