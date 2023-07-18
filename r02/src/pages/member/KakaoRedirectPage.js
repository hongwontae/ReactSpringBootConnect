import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
//import { getAccessToken, getUserEmail } from "../../api/kakaoAPI";


const KakaoRedirectPage = () => {

    const [searchParams] = useSearchParams()

    const authCode = searchParams.get('code')

    useEffect(() => {

        axios.get(`http://localhost:8080/api/member/kakao?code=${authCode}`)


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