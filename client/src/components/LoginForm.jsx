import { useState } from "react";
import { loginUser } from "../services/user";
import { useDispatch,useSelector } from "react-redux";
import { userInfo,getUsername } from "../features/userSlice";
const LoginForm = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUsername);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleLogin = async(e)=>{
        e.preventDefault()
        const credentials = {
            email,
            password
        }
        const userLogin = await loginUser(credentials)
        console.log(userLogin.status);
        const UserInfo = {
            username:userLogin.data.username,
            token:userLogin.data.userToken
        }
        if(userLogin.status===200){
            localStorage.setItem("userInfo",JSON.stringify(UserInfo));
            dispatch(userInfo(UserInfo))
        }
        setEmail('')
        setPassword('')
    }
  return (
   <>
    {
        !user&&<div className="w-[100%] min-h-screen flex justify-center items-center ">
        <form className="w-[50vw] h-[50vh] border-2 shadow-md flex flex-col justify-center items-center" onSubmit={handleLogin}>
            <h2 className="text-[2.5rem] font-bold">Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="border-2 w-[40%] mt-8 p-1"
            />
            <input  
                type="password"
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="border-2 w-[40%] mt-5 p-1"
            />
            <button className="border-2 border-black mt-2 rounded-md px-2 py-1 hover:bg-black hover:text-white font-medium">Submit</button>
        </form>
    </div>
    }
   </>
  )
}

export default LoginForm