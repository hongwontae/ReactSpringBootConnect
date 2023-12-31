import axios from "axios"
import { createSearchParams } from "react-router-dom"

export const postProduct = async(formdata) => {


   const header = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }
   
    const res = await axios.post('http://localhost:8080/api/products/', formdata, header)
    
    return res.data

}

export const getList = async (queryObj) =>{

    const queryString = createSearchParams(queryObj).toString()


    const res = await axios.get(`http://localhost:8080/api/products/list?${queryString}`)

    return res.data
}

export const getProduct = async (pno) =>{

    const res = await axios.get(`http://localhost:8080/api/products/${pno}`)

    return res.data
}

export const deleteProduct = async (pno) =>{

    const res = await axios.delete(`http://localhost:8080/api/products/${pno}`)

    return res.data
}
export const putProduct = async(formdata) => {


    const header = {
         headers: {
             "Content-Type": "multipart/form-data",
         }
     }
    
     const res = await axios.post('http://localhost:8080/api/products/modify', formdata, header)
     
     return res.data
 
 }