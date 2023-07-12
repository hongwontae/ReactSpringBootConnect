import axios from "axios"

export const getList = async(param) => {

    const {page, size, type, keyword} = param

    let queryStr = `?page=${!page ? 1:page}&size=${!size ? 10 :size}`

    if(keyword){
        queryStr += `&type=${type}&keyword=${keyword}`
    }

    const res  =await axios.get(`http`)


}







export const postProduct = async(formdata) => {


   const header = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }
   
    const res = await axios.post('http://localhost:8080/api/products/', formdata, header)
    
    return res.data

}