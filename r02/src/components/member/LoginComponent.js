import { useState } from "react";
import { useDispatch } from "react-redux";
import { postLoginThunk, requestLogin } from "../../reducers/loginSlice";
import { postLogin } from "../../api/memberAPI";


const initState = {
    email: 'karl08@gmail.com',
    pw: '1111'
}

const LoginComponent = () => {

    const loginState = useSelector(state => state.login)

    const [loginInfo, setLoginInfo] = useState({ ...initState })
    
    const dispatch = useDispatch()





    return ( 
        <div className="text-2xl">
            <div className="h-[40vh] bg-slate-300 w-[40vh] my-20 mx-auto">
                <div className="pt-[7vh] px-2 ">
                    <div className="overflow-hidden ">
                        <label className="float-left">email</label>
                        <input type="text" name="email" value={loginInfo.email}
                        className="p-1 float-right border-2 border-black text-center "
                        onChange={() => {}}></input>
                    </div>
                    <div className="overflow-hidden">
                        <label className="float-left">pw</label>
                        <input type="password" name="pw" value={loginInfo.pw}
                        className="p-1 float-right border-2 border-black rounded text-center"
                        onChange={() => {}}></input>
                    </div>
                    <div >
                        <button 
                        className="mt-5 border-slate-700 border-2 p-2 "
                        onClick={() => dispatch(postLoginThunk(loginInfo))}>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>


     );
}
 
export default LoginComponent;