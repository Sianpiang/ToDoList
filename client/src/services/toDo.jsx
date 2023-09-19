import axios from "axios"

const baseURL = "http://localhost:3001/todo"

const getAllToDo = async(token)=>{
    const userToken = `bearer ${token}`
    const config = {
        headers: {authorization: userToken}
    }
    console.log(config);
    const toDo = await axios.get(`${baseURL}`,config)
    console.log(toDo.data);
    return toDo.data
}

const createToDo = async(token,content)=>{
    const userToken = `bearer ${token}`
    const config = {
        headers: {authorization: userToken}
    }
    const newToDo = {
        content
    }
    const res = await axios.post(`${baseURL}`,newToDo,config)
    console.log("newTODo",res.data);
    return res.data
}

export {
    getAllToDo,
    createToDo
}