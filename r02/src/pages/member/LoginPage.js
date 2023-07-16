import LoginComponent from "../../components/member/LoginComponent";
import BasicLayout from "../../layouts/BasicLayout";



const LoginPage = () => {
    return ( 
        <BasicLayout>
            <div>Login Page</div>
            <div className=" text-center h-[80vh]">
                <LoginComponent></LoginComponent>
            </div>
            
        </BasicLayout>
     );
}
 
export default LoginPage;