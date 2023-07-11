import { useRef, useState } from "react";
import { postProduct } from "../api/productapi";

const initState = {

    title:"",
    content:"",
    writer:"",
    images:[],
}


const ProductInput = () => {

    const [board, setBoard] = useState({...initState})

    const handleChange = (e)=>{
        board[e.target.name] = e.target.value
        setBoard({...board})
    }

    const handleClickSave = (e)=>{
        const formData = new FormData();
        formData.append("title",board.title);
        formData.append("content",board.content);
        formData.append("writer",board.writer);

        console.dir(FileRef.current)

        const arr = FileRef.current.files

        for(let file of arr){
            formData.append("images",file)
        }

        postProduct(formData)

    }

    const handleClickClear = (e) =>{
        FileRef.current.value=""
    }

    const FileRef = useRef()


    return(
        <div>
            <h1>Input</h1>
            <div>
                <input type="text" name="title" value={board.title} onChange={handleChange}></input>
            </div>
            <div>
                <input type="text" name="content" value={board.content} onChange={handleChange}></input>
            </div>
            <div>
                <input type="text" name="writer" value={board.writer} onChange={handleChange}></input>
            </div>
            <div>
                <input type="file" ref={FileRef} name="images" multiple value={board.images} onChange={handleChange}></input>
            </div>
            <div>
                <button onClick={handleClickSave}>save</button>
                <button onClick={handleClickClear}>ClearFiles</button>
            </div>
        </div>

    )


}

export default ProductInput;