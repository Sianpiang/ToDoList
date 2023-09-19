import {configureStore} from "@reduxjs/toolkit"
import userSlice from "../features/userSlice"
import toDoSlice from "../features/toDoSlice"

const store = configureStore({
    reducer:{
        user:userSlice,
        toDo:toDoSlice
    }
})

export default store