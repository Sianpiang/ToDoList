import {useEffect, useState} from 'react'
import "./App.css"
import LoginForm from "./components/LoginForm"
import Todo from "./components/Todo"
const App = () => {
  const [userInfo,setUserInfo]=useState([])
    useEffect(()=>{
        const userLoged = localStorage.getItem("userInfo");
        if(userLoged){
            setUserInfo(JSON.parse(userLoged))
        }
    },[])
  return (
    <div className="">
      <LoginForm
        userInfo={userInfo}
      />
      <Todo
        userInfo={userInfo}
      />
    </div>
  )
}

export default App