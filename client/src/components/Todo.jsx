import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getToken, getUsername, userInfo } from '../features/userSlice'
import { getAllToDo } from '../services/todo';
import { setToDo } from '../features/toDoSlice';
import List from './List';
import NavBar from './navBar';
import ToDoForm from './ToDoForm';

const Todo = () => {
  const token = useSelector(getToken)
  const dispatch = useDispatch();

    const userInfos = useSelector(getUsername)
    console.log(userInfos);
    useEffect(()=>{
        const userLoged = localStorage.getItem("userInfo");
        if(userLoged){
          const info = JSON.parse(userLoged);
          dispatch(userInfo(info))
        }
    },[dispatch])

    useEffect(()=>{
      const fetchToDo = async()=>{
        const toDo = await getAllToDo(token);
        if(toDo){
          dispatch(setToDo(toDo))
        }
      }
      fetchToDo()
    },[dispatch,token])
    
  return (
    <>
        {
            userInfos&&<section>
            <NavBar/>
            <ToDoForm/>
            <List/>
            </section>
        }
    </>
  )
}

export default Todo