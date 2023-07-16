import ListComponent from "../../components/products/ListComponent";
import useQueryObj from "../../hooks/useQueryObj";
import { createSearchParams } from "react-router-dom"

const ListPage = () => {

    const { queryObj, setSearch, moveRead, moveList } = useQueryObj()

    const movePage = (num) => {
        console.log("num===", num)
        queryObj.page = num
        setSearch({ ...queryObj })
    }



    return (
        <div className=" bg-slate-500">
            <div>
                <div className="text-2xl pb-2 text-center text-white">
                    Products ListPage
                </div>

                <ListComponent
                    queryObj={queryObj}
                    movePage={movePage}
                    moveRead={moveRead}>
                </ListComponent>
            </div>
        </div>
    );
}

export default ListPage;