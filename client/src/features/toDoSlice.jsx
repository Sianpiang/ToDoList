/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { createToDo,updateToDoStatus,deleteToDo } from "../services/todo";

const toDoSlice = createSlice({
    name:"toDo",
    initialState:[],
    reducers:{
        setToDo:(state,action)=>{
            return action.payload
        },
        addToDo:(state,action)=>{
            state.push(action.payload)
        },
        updateStatus:(state,action)=>{
            const id=action.payload
            const item = state.find(i=>i.id===id)
            if(item.status==="pending"){
                const updatedItem = {...item,status:"Done"} 
                return state.map(i=>i.id===id?updatedItem:i)
            }
            else if(item.status==="Done"){
                const updatedItem = {...item,status:"pending"}
                return state.map(i=>i.id===id?updatedItem:i)
            }
            return state
        },
        deleteToDoState:(state,action)=>{
            const id = action.payload
            return state.filter(t=>t.id!==id)
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

export const update = (token,toDo,id)=>{
    return async (dispatch)=>{
        const list = toDo
        const toDoList = await updateToDoStatus(token,list,id)
        dispatch(updateStatus(id))
    }
}

export const deleteToDoItem = (token,id)=>{
    return async (dispatch)=>{
        const deleteItem = await deleteToDo(token,id);
        console.log(deleteItem);
        dispatch(deleteToDoState(id))
    }
}

export const getToDoList = (state)=>state.toDo;

export const {setToDo,addToDo,updateStatus,deleteToDoState}= toDoSlice.actions
export default toDoSlice.reducer;