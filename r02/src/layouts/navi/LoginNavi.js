import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const LoginNavi = () => {

    const {email,signed} = useSelector(state => state.login)

    console.log("LoginNavi..........", email ,signed)

    if(signed) {
        return (
            <div>
                <div>
                    {email}
                </div>
            </div>

        )
    }


    return ( 
        <div>
            <div>
                <Link to="/member/login">LOGIN</Link>
            </div>

        </div>
     );
}
 
export default LoginNavi;