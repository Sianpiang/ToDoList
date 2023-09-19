/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { logOut } from "../features/userSlice"
const NavBar = () => {
  const dispatch =useDispatch()
  const logout = ()=>{
    localStorage.clear()
    dispatch(logOut())
}
  return (
    <nav className='w-[100%] h-20 bg-black text-white flex justify-around items-center'>
        <h2>To-Do-List</h2>
        <button onClick={logout} className="border-2 border-white px-2 py-1 rounded hover:cursor-pointer">LogOut</button>
    </nav>
  )
}

export default NavBar