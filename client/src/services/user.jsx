import axios from "axios"

const baseUrl = "http://localhost:3001/user"

const loginUser = async(credentials)=>{
    const login = await axios.post(`${baseUrl}/login`,credentials)
    return login
}



export {
    loginUser,
}