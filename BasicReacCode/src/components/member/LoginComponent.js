import { useState } from "react";
import { useDispatch } from "react-redux";
import { requestLogin } from "../../reducers/loginSlice";

const initState = {
    email:'user00@aaa.com',
    pw:'1111'
}

const LoginComponenet = () => {
    
    const [loginInfo, setLoginInfo] =useState({...initState})
    
    const dispatch = useDispatch()

    return (  
            <div className="m-3 p-3">
                <div>
                    <label>Email - </label>
                    <input className="bg-black" type="text" name="email" value={loginInfo.email} onChange={()=>{}}></input>
                </div>
                <div className="m-3 p-3">
                    <label>Password - </label>
                    <input className="bg-black" type="password" name="pw" value={loginInfo.pw} onChange={()=>{}}></input>
                </div>
                <div>
                    <button onClick={()=> dispatch(requestLogin(loginInfo))}>LOGIN</button>
                </div>
                <div className="flex justify-center items-center">
                <img src={require('../../image/backimage.jpg')} ></img>
                </div>
            </div>    
    );
}
 
export default LoginComponenet;