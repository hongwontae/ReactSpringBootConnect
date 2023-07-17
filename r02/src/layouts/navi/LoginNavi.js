import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LoginNav = () => {

   const { email, nickname } = useSelector(state => state.login)

   console.log("LoginNav...........", email, nickname)

   if (email !== '') {
      return(
      <div className="font-serif">
         <div>{email} - {nickname}</div>
      </div>)
   }


   return (
      <div>
         <Link to="/member/login"> <div>LOGIN</div></Link>
      </div>
   );
}

export default LoginNav;