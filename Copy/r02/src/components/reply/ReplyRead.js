import { useEffect, useState } from "react";
import { deleteReply, getReply, putReply } from "../../api/repliesAPI";

const initState = {
    rno: 0,
    bno: 0,
    replyText: '',
    replyFile: '',
    replyer: ''
}


const ReplyRead = ({ rno, cancelRead, refreshPage }) => {

    console.log("ReplyRead............... " + rno)

    const [reply, setReply] = useState(initState)

    useEffect(() => {

        getReply(rno).then(data => {
            console.log(data)
            setReply(data)
        })


    }, [rno])

    const handleClickDelete = () => {

        deleteReply(rno).then(data => {
            alert(`${data.result}번 댓글이 삭제되었습니다.`)
            refreshPage(true)
        })
    }
    const handleChange = (e) => {

        reply[e.target.name] = e.target.value
        setReply({ ...reply })

    }

    const handleClickModify = () => {

        putReply(reply).then(data => {
            alert(`${data.result}번 댓글이 수정되었습니다.`)
            refreshPage(true)
        })
    }

    if (reply.replyText === '해당 글은 삭제 되었습니다.') {
        return <></>
    }


    return (
        <div className="m-8 bg-blue-200 border-4 ">
            <div>Reply Read {rno}</div>

            <div>
                <div>{rno}</div>
                <div>
                    <input
                        type="text"
                        name="replyText"
                        onChange={handleChange}
                        value={reply.replyText}>
                    </input>
                </div>
                <div>{reply.replyer}</div>
            </div>

            <div className="text-white">
                <span className="m-5 font-serif border-2 border-sky-300">
                    <button onClick={handleClickModify}>MODIFY</button>
                </span>
                <sapn className="m-5 font-serif border-2 border-sky-300">
                    <button onClick={handleClickDelete}>DELETE</button>
                </sapn>
                <span className="m-5 font-serif border-2 border-sky-300">
                    <button onClick={cancelRead}>CANCEL</button>
                </span>
            </div>

        </div>
    );
}

export default ReplyRead;