import { createSlice } from "@reduxjs/toolkit";

const initState = {
    eamil : '',
    signde : false,
}

const loginslice = createSlice({
    name : "loginslice",
    initialState : initState,
    reducers : {
        requestLogin : (state, param) => {
            const payload = param.payload
            console.log("payload..",payload)

        }
    }
})

export const {requestLogin} = loginslice.actions

export default loginslice.reducer