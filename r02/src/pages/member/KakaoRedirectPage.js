import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { requestLogin } from "../../reducers/loginSlice";
//import { getAccessToken, getUserEmail } from "../../api/kakaoAPI";


const KakaoRedirectPage = () => {

    const [searchParams] = useSearchParams()

    const dispatch = useDispatch()

    const authCode = searchParams.get('code')

    const navigate = useNavigate()

    useEffect(() => {

        axios.get(`http://localhost:8080/api/member/kakao?code=${authCode}`).then(res => {
            console.log(res.data)

            const memberInfo=res.data

            const nickName = memberInfo.nickName

            dispatch(requestLogin(memberInfo))

        if(nickName==='SOCIAL_NICKNAME'){
            navigate("/member/modify")
        } else{
            navigate("/")
        }

            

        })


        // getAccessToken(authCode).then( accessToken => {
        //     console.log(accessToken)
        //     getUserEmail(accessToken).then(email => {
        //         console.log("EMAIL: " + email)
        //     })
        // })

    },[authCode])

    return ( 
        <div>
            {authCode}
        </div>
     );
}
 
export default KakaoRedirectPage;