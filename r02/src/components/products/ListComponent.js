import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/productAPI";
import { useEffect, useState } from "react";
import ListPageComponent from "../common/ListPageComponent";


const initState = {
    dtoList:[],
    end:0,
    start:0,
    next: false,
    prev: false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO:null
}

const ListComponent = ({queryObj, movePage, moveRead}) => {

    const [listData, setListData] = useState(initState)

    useEffect(() => {

        getList(queryObj).then(data => {
            console.log(data)
            setListData(data)
        })

    },[queryObj])
    // use*** = 컴포넌트 안에서만. 아닐경우는 함수로 사용가능
    // console.log(createSearchParams(queryObj).toString())


    return ( 
        <div>
            <div>
                <div className="text-2xl pb-2 text-center text-white">ListComponent</div>
                
            </div>
            <div>
                <ul className="flex flex-wrap container justify-center font-Archivo mx-3">
                    {listData.dtoList.map(
                        dto => 
                        <li 
                        className=" w-[35vh] h-[485px] border-2 m-1 p-2 rounded-md  shadow-md  bg-slate-100"
                        key={dto.pno}
                        onClick={() => moveRead(dto.pno)}
                        >
                            <div className=" text-center text-2xl">
                                <div className="text-slate-800">
                                    {dto.pno}
                                </div>
                                <div className="flex justify-center items-center">
                                    <img src={`http://localhost/s_${dto.fname}`} alt="ddd"></img>
                                </div>
                                <div className=" mt-20">
                                    <div className="justify-center text-center">{dto.pname} - {dto.price}</div> 
                                    <div>
                                        {dto.reviewCnt} - {dto.reviewAvg}
                                    </div>
                                </div>
                            </div>
                             </li>)}
                </ul>
            </div>

            <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>

        </div>
     );
}
 
export default ListComponent;