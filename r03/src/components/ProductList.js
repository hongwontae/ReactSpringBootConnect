import { useEffect, useState } from "react";
import { getList } from "../api/productAPI";

const initState = {
    dtoList:[],
    end:0,
    start:0,
    next:false,
    prev:false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO: null
  }

const ProductList = () =>{

    const [listData, setListData] = useState(initState)

    useEffect(()=>{

        getList().then(data=>
            console.log(data))

    },[])

    return (
        <div>

        </div>
    )

}

export default ProductList;