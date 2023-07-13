import { Link, Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";


const IndexPage = () => {
    return ( 
        <BasicLayout>
            <div className="bg-blue-400 text-2xl text-white flex justify-center">
            <div className="underline font-extrabold m-2 p-2"><Link to="/products/list"> List</Link> </div> 
                <div className="underline font-extrabold m-2 p-2">
                    <Link to="/products/register">Register </Link></div>
                
            </div>
            <div className=" bg-white w-full border-2">
                <Outlet></Outlet>
            </div>
        </BasicLayout>
     );
}
 
export default IndexPage;