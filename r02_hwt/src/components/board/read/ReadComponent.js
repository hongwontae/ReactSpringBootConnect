import { useEffect, useState } from "react";
import { getOne } from "../../../api/boardAPI";


const initState = {
    bno: 0,
    title: '',
    content: '',
    writer: '',
    regDate: '',
    modDate: ''
}

const ReadComponent = ({ bno }) => {

    const [board, setBoard] = useState(initState)

    useEffect(() => {
        getOne(bno).then(data => {
            setBoard(data)
        })
    }, [bno])

    return (
        <div className="text-white text-2xl font-bold m-2 p-2">
            <div className="border-2 border-gray-400">
                <span>Number - </span>
                {board.bno}
            </div>
            <div className="border-2 border-gray-400">
                <span>Title - </span>
                {board.title}
            </div>
            <div className="border-2 border-gray-400">
                <div className="border-b-2">Content</div>
                
                <textare>
                {board.content}
                </textare>
            </div>
            <div className="border-2 border-gray-400">
                <span>Writer - </span>
                {board.writer}
            </div>
            <div>
                <span>Regist Date - </span>
                {board.regDate}
            </div>
    

        </div>
    );
}

export default ReadComponent;