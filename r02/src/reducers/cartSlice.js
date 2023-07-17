import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from("@reduxjs/toolkit");
import axios from "axios";

const initState = {
    items : [],
    loading : false,
}

export const addCartThunk = createAsyncThunk("addCartThunk", async (item) => {
    const res = await axios.post(`http://localhost:8080/api/cart/add`, item)
    return res.data
})

const cartSlice = createSlice({
    name : "cartSlice",
    inintialState : initState,
    extraReducers : () => {
        
    }

})