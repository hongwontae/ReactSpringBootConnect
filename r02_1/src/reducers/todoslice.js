import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
    name : "todoSlice",
    initialState :['aaa','bbb'],
    reducers : {
        addTodo : (state, param) => {
            console.log("todo..",state)

            return [...state, param.payload]
        }
    }    
})

export const {addTodo} = todoslice.actions

export default todoslice.reducer