import axios from "axios";
import { getCookies } from "./cookieUtil";

const jwtAxios = axios.create()

const beforeReq = (config) => {
    console.log("beforeRequest.....................")

    const {accessToken} =  getCookies("login")


    console.log(config)

    if(!accessToken){
        throw new Error("No access Token")
    }


    config.headers.Authorization = `Bearer ${accessToken}`
    

    return config
}

const requestFail = (err) => {

    console.log("Request Fail....")

    return Promise.reject(err)
}

const beforeRes = (res) => {

    console.log("response....")

    if(res.data.error === 'Expires'){

        console.log("Access Token has expired")

        refreshJWT()

    }

    return res;
}

const refreshJWT = async() => {


    const {accessToken, refreshToken} = getCookies();


    const header = {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        }
    }

    const res = await axios.get(`http://localhost:8000/api/member/refresh?`)


}




const responseFail = (err) => {
    console.log("ResponseFail....")

    return Promise.reject(err)
}

jwtAxios.interceptors.request.use(beforeReq, requestFail)

jwtAxios.interceptors.response.use(beforeRes, responseFail)

export default jwtAxios;