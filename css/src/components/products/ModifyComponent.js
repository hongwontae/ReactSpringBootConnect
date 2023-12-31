import { useEffect, useRef, useState } from "react"
import { deleteProduct, getProduct, putProduct } from "../../api/productAPI"


const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    images: []
}


const ModifyComponent = ({ pno, moveList, moveRead }) => {

    const fileRef = useRef()
    const [product, setProduct] = useState(initState)

    useEffect(() => {

        getProduct(pno).then(data => {
            setProduct(data)
        })

    }, [pno])

    const handleClickDelete = () => {

        deleteProduct(pno).then(data => {
            alert("상품이 삭제되었습니다")
            moveList()
        })
    }

    const handleChange = (e) => {

        console.log("handle change..........")
        product[e.target.name] = e.target.value

        setProduct({ ...product })
    }

    const handleClickDelImg = (fname) => {

        const newArr = product.images.filter(ele => ele !== fname)

        product.images = newArr

        setProduct({ ...product })

    }

    const handleClickModify = () => {

        const formData = new FormData();

        formData.append("pno", product.pno)
        formData.append("pname", product.pname)
        formData.append("pdesc", product.pdesc)
        formData.append("price", product.price)

        if (product.images) {
            for (let pi of product.images) {
                formData.append("images", pi)
            }
        }

        const arr = fileRef.current.files

        for (let file of arr) {
            formData.append("files", file)
        }

        putProduct(formData).then(data => {
            alert("수정되었습니다.")
            moveRead(pno)
        })

    }



    return (
        <div>
            <div className="text-2xl pb-2 text-center text-white">ModifyComponent</div>
            <div>
                <div className="m-2 p-2 border-2">
                    {product.pno}
                </div>
                <div className="m-2 p-2 border-2">
                    <input
                        type="text" name="pname" value={product.pname}
                        onChange={handleChange}></input>
                </div>
                <div className="m-2 p-2 border-2">
                    <input
                        type="text" name="pdesc" value={product.pdesc}
                        onChange={handleChange}></input>
                </div>
                <div className="m-2 p-2 border-2">
                    <input
                        type="number" name="price" value={product.price}
                        onChange={handleChange}></input>
                </div>
                <div className="m-2 p-2 border-2">
                    <input type='file' ref={fileRef} multiple name='images'></input>
                </div>

                <div className="m-2 p-2 border-2">
                    <ul className="m-2 p-2 list-none flex">
                        {product.images.map((fname, idx) =>
                            <li key={idx}
                                className="m-2">
                                <img src={`http://localhost/s_${fname}`}></img>
                                <button className="bg-red-700 m-2 p-2 text-white"
                                    onClick={() => handleClickDelImg(fname)}>X</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div>
                <button
                    className="bg-neutral-700 border-2 m-2 p-2 text-white font-bold"
                    onClick={handleClickModify}>
                    Modify
                </button>
                <button
                    className="bg-neutral-700 border-2 m-2 p-2 text-white font-bold"
                    onClick={moveList}>
                    List
                </button>
                <button
                    className="bg-neutral-700 border-2 m-2 p-2 text-white font-bold"
                    onClick={handleClickDelete}>
                    DELETE
                </button>
            </div>
        </div>
    );
}

export default ModifyComponent;