import { useSelector,useDispatch} from "react-redux"
import { getToDoList,update,deleteToDoItem} from "../features/toDoSlice"
import { getToken } from "../features/userSlice"
const List = () => {
    const dispatch = useDispatch()
    const toDos = useSelector(getToDoList)
    const token = useSelector(getToken)
    const handleStatus = (id)=>{
      const toDo = toDos.find(t=>t.id===id)
      dispatch(update(token,toDo,id))
    }
    const handleDelete = (id)=>{
      dispatch(deleteToDoItem(token,id))
    }
  return (
    <section className="p-10">
        {
            toDos.map(toDo=>(<div key={toDo.id} className=" border-2 mt-3 shadow-md p-4">
                <h2 className="font-bold">By {(Object.values(toDo.userId)[2])}</h2>
                <p className={`${toDo.status==="Done"&&"line-through"}`}>{toDo.content}</p>
                <button onClick={()=>{handleStatus(toDo.id)}} className={`${toDo.status==="pending"?"text-red-500":"text-green-500"} border-2 px-2 py-1 rounded mt-2`}>{toDo.status}</button> 
                {toDo.status==="Done"&&<button className="border-2 border-red-500 px-2 py-1 ml-3 rounded-md text-red-500" onClick={()=>handleDelete(toDo.id)}>Delete</button>}
            </div>))
        }
    </section>
  )
}

export default List