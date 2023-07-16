import LoginComponent from "../../components/member/LoginComponent";
import BasicLayout from "../../layouts/BasicLayout";



const LoginPage = () => {
    return ( 
        <BasicLayout>
            <div className="text-2xl pb-2 text-center text-white">Login Page</div>
            <div className=" text-center h-[60vh]">
                <LoginComponent></LoginComponent>
            </div>
            
        </BasicLayout>
     );
}
 
export default LoginPage;