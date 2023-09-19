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
    return res.data
}

const updateToDoStatus = async(token,toDo,id)=>{
    const userToken = `bearer ${token}`
    const config = {
        headers: {authorization: userToken}
    }
    if (toDo.status==="pending") {
        const updatedToDo = {...toDo,status:"Done"}
        const res = await axios.patch(`${baseURL}/${id}`,updatedToDo,config)
        return res.data
    } else if (toDo.status==="Done") {
        const updatedToDo = {...toDo,status:"pending"}
        const res = await axios.patch(`${baseURL}/${id}`,updatedToDo,config)
        return res.data
    }
}
const deleteToDo = async(token,id)=>{
    const userToken = `bearer ${token}`
    const config = {
        headers: {authorization: userToken}
    }
    const Delete = await axios.delete(`${baseURL}/${id}`,config);
    return Delete.data
}
export {
    getAllToDo,
    createToDo,
    updateToDoStatus,
    deleteToDo
}