import ListComponent from "../../components/products/ListComponent";
import useQueryObj from "../../hooks/useQueryObj";
import { createSearchParams } from "react-router-dom"

const ListPage = () => {

    const {queryObj, setSearch, moveRead, moveList} = useQueryObj()

    const movePage = (num) => {
        console.log("num===" , num)
        queryObj.page = num
        setSearch({...queryObj})
    }



    return ( 
        <div className="text-3xl bg-slate-800">
            Products_ListPage

            <ListComponent 
            queryObj={queryObj} 
            movePage={movePage} 
            moveRead={moveRead}>
            </ListComponent>
        </div>
     );
}
 
export default ListPage;