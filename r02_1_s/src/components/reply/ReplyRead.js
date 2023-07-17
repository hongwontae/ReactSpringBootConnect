import { useEffect, useState } from "react";
import { deleteReply, getReply, putReply } from "../../api/repliesAPI";

const initState = {
    rno: 0,
    bno: 0,
    replyText: '',
    replyFile: '',
    replyer:''
}


const ReplyRead = ({rno,cancelRead,refreshPage}) => {
    
    console.log("ReplyRead............... " + rno)

    const [reply, setReply] =useState(initState)

    useEffect(()=>{

        getReply(rno).then(data =>{
            console.log(data)
            setReply(data)
        })


    },[rno])

    const handleClickDelete =  () =>{

        deleteReply(rno).then(data =>{
            alert(`${data.result}번 댓글이 삭제되었습니다.`)
            refreshPage(true)
        })
    }
    const handleChange = (e) =>{

        reply[e.target.name] = e.target.value
        setReply({...reply})
        
    }

    const handleClickModify= () =>{

        putReply(reply).then ( data =>{
            alert(`${data.result}번 댓글이 수정되었습니다.`)
            refreshPage(true)
        })
    }

    if(reply.replyText === '해당 글은 삭제 되었습니다.'){
        return <></>
    }

    
    return (  
        <div className="m-8 bg-gradient-to-r from-indigo-400 to-sky-300 border-4  text-zinc-100">
            <div className=" text-xl text-center">Reply Read {rno}</div>

            <div>
                <div className=" pl-2 pb-2">Reply Number - {rno}</div>
                <div className=" pl-2 pb-2">   
                    <span>Reply Text - </span>             
                    <input 
                    type="text" 
                    name="replyText"
                    className="text-black"
                    onChange={handleChange} 
                    value={reply.replyText}>
                    </input>
                    </div>
                <div className=" pl-2">Replyer -{reply.replyer}</div>
            </div>

            <div className="pl-2">
                <button className="border-2 border-slate-600 ml-2 mr-2" onClick={handleClickModify}>MODIFY</button>
                <button className="border-2 border-slate-600 ml-2 mr-2" onClick={handleClickDelete}>DELETE</button>
                <button className="border-2 border-slate-600 ml-2 mr-2" onClick={cancelRead}>CANCEL</button>
            </div>
        
        </div>
    );
}
 
export default ReplyRead;