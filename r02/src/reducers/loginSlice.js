import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../util/cookieUtil";
import { postLogin } from "../api/memberAPI";

export const postLoginThunk = 
    createAsyncThunk('postLoginThunk', (params) => {
        return postLogin(params)
    })

const loadCookie = () => {

    const loginObj = getCookie("login")

    console.log("login...............obj........")
    console.log(loginObj)

    if(!loginObj){
        return initState
    }

    return loginObj
}

const initState = {
    email:'',
    nickname:'',
    admin:false,
    loading: false
}

const loginSlice = createSlice({
    name:'loginSlice',
    initialState: loadCookie(),
    reducers: {
        requestLogin: (state, param) => {
            const payload = param.payload 
            console.log("requestLogin", payload)
            const loginObj = {email: payload.email, signed:true}

            setCookie("login", JSON.stringify(loginObj), 1)

            return loginObj
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(postLoginThunk.fulfilled, (state,action) => {
            console.log("fulfilled" , action.payload)
            const {email,nickname,admin} = action.payload
            state.loading = false
            state.email = email
            state.nickname = nickname
            state.admin = admin

            setCookie("login", JSON.stringify(action.payload), 1)
        })
        .addCase(postLoginThunk.pending, (state,action) =>{
            console.log("pending")
            state.loading = true
        })
        .addCase(postLoginThunk.rejected, (state,action) => {
            console.log("rejected")
        })
    }
})



export default loginSlice.reducer