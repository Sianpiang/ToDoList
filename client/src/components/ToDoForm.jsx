import { useState } from "react"
import { add } from "../features/toDoSlice"
import { useDispatch,useSelector } from "react-redux"
import { getToken } from "../features/userSlice"
const ToDoForm = () => {
    const dispatch = useDispatch()
    const token =useSelector(getToken)
    const [toDo,setToDo]=useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(add(toDo,token))
        setToDo("")
    }
  return (
    <form className="border-2 shadow-md flex flex-col px-10 h-40 justify-center items-center mt-2" onSubmit={handleSubmit}>
        <p className="font-bold mb-2">Add To-Do</p>
        <input
            type="text"
            value={toDo}
            onChange={(e)=>setToDo(e.target.value)}
            className="border-2 border-black px-4 py-1 rounded-sm"
        />
        <button className="border-2 border-black px-3 py-1 rounded-md mt-3">Add</button>
    </form>
  )
}

export default ToDoForm