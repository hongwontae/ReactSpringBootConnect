import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name : "CountSlcie",
    initialState : {num:5},
    reducers : {
        inc : (state,param,third)=>{
            console.log(state)
            console.log(param)
            console.log(third)
            console.log("==========================================")
            return {num:state.num + param.payload}
            
        },
        des : (state,param, third) =>{
            console.log(state)
            console.log(param)
            console.log(third)
            console.log("======================")

            return {num:state.num - param.payload}
        }
    }
})

export const {inc,des} = countSlice.actions

export default countSlice.reducer