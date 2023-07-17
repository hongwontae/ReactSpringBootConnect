import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookies, setCookie } from "../util/cookieUtil";
import { postLogin } from "../api/memberAPI";

export const postLoginThunk = 
    createAsyncThunk('postLoginThunk', (params)=>{
        return postLogin(params)
    })

const loadCookie = () => {

    const loginObj = getCookies("login")
    console.log("login.......obj........")
    console.log(loginObj)

    if(!loginObj){
        return initState
    }

    return loginObj
}


const initState = {
    email : '',
    signed : false,
}


const loginSlice = createSlice({
    name : "loginSlice",
    initialState : loadCookie(),
    reducers : {
        requestLogin : (state , param) => {
            const payload = param.payload
            console.log("requestLogin : ",payload)
            const loginObj = {email : payload.email, signed : true}

            setCookie("login", JSON.stringify(loginObj), 1)

            return loginObj

        }
        
    }


    
})


export default loginSlice.reducer