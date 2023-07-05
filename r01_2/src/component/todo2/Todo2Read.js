import { useEffect, useState } from "react";
import { getTodo, putTodo, removeTodo } from "../../api/todoAPI";

// 아예 비어오면 에러나오는걸 대비하기위해 빈껍데기 만들기
const ininState = {
    tno:0,
    title:''
}

const Todo2Read = ({target,changeView}) => {

    const [todo,setTodo] =useState(ininState)
    // 다시 read를 부르기위해쓰는 useState
    const [refresh, setRefresh] =useState(false)

    useEffect(()=>{
        getTodo(target).then(data => setTodo(data))
    },[target, refresh])

    const handleClickDel = async() =>{

        const {result} = await removeTodo(target)

        // {result:'success'}

        if(result === "success"){
            alert("삭제되었습니다.")
            
        }
        changeView("list")
        
    }

    const handleClickMod = async()=>{
        
        const {result} = await putTodo(todo)

        if(result === "success"){
            alert("수정되었습니다.")
            
        }
        // read페이지에 있게하기위해서 
        setRefresh(!refresh)
    }

    return ( 
        <div>
            <div>Todo Read</div>
            <div>{target}</div>
            <div>{todo.tno}</div>
            <div><input type="text" value={todo.title} onChange={e=> {
               todo.title = e.target.value
               setTodo({...todo}) 
            }}></input></div>
            <div className="flex p-4">
                <button className="m-2 p-2 border-2" onClick={handleClickMod}>MOD</button>
                <button className="m-2 p-2 border-2" onClick={handleClickDel}>DEL</button>
            </div>
        </div>
     );
}
 
export default Todo2Read;