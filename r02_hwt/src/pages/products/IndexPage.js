import { Link, Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";


const IndexPage = () => {
    return ( 
        <BasicLayout>
            <div>
            <Link to="/products/list"> <div className="underline font-extrabold m-2 p-2">List</div> </Link>
                <div className="underline font-extrabold m-2 p-2">Register</div>
                
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </BasicLayout>
     );
}
 
export default IndexPage;