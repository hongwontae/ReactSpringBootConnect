import { createSlice } from "@reduxjs/toolkit"


const countSlice = createSlice({
    name : "countSlice",
    initialState : {num:5},
    reducers : {
        inc : (state , param, third) => {
            console.log(state)
            console.log(param)
            console.log(third)
            return {num : state.num + param.payload}
        },
        dec : (state, param, third) => {
            console.log(state)
            console.log(param)
            console.log(third)
            return {num : state.num - param.payload}
        }
    }
})

export const {inc, dec} = countSlice.actions

export default countSlice.reducer