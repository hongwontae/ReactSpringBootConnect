import { configureStore } from "@reduxjs/toolkit";
import countslice from "../reducers/countslice";
import todoslice from "../reducers/todoslice";

export default configureStore(
    {reducer : {
        counter : countslice,
        todo : todoslice,
    }}
)

