import { configureStore } from "@reduxjs/toolkit";
import countslice from "../reducers/countslice";
import todoslice from "../reducers/todoslice";
import loginslice from "../reducers/loginslice";

export default configureStore(
    {reducer : {
        counter : countslice,
        todo : todoslice,
        login : loginslice,
    }}
)

