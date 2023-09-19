import { useSelector} from "react-redux"
import { getToDoList } from "../features/toDoSlice"
const List = () => {
    const toDos = useSelector(getToDoList)
  return (
    <section >
        {
            toDos.map(toDo=>(<div key={toDo.id} className=" border-2 mt-3 shadow-md p-4">
                <h2 className="font-bold">By {(Object.values(toDo.userId)[2])}</h2>
                <p>{toDo.content}</p>
                <button className={`${toDo.status==="pending"?"text-red-500":"text-green-500"} border-2 px-2 py-1 rounded mt-2`}>{toDo.status}</button> 
            </div>))
        }
    </section>
  )
}

export default List