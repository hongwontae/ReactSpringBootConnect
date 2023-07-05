import { useEffect, useState } from "react";

const TodoRead = ({current,remove,modify}) => {
    // Read에서는 props는 데이터가 Read에겐 현재이다
    // current를 물고있는데 todo값이 바뀌는이유
    // 단일페이지에선 todo가 물고있는 초기값이 계속 바뀌지않는다.
    // useEffect 
    // 비동기상태일때 쓴다. || props에 따라서 값을 바꿔주고싶을때 사용한다.
    useEffect(() => {
        setTodo(current)
    }, [current])
    const [todo, setTodo] = useState(current)
    // React에서 가장 자주 만나는 문제
    // 이떄 useEffect로 사용한다

    if(!todo){
        return <>NOT Available</>
    }

    return (  
        <div className="w-full  bg-red-300">

            <div>Todo Read</div>
            <div>
                {todo.tno}
            </div>
            <div>
              <input 
              type="text" 
              name="title" 
              value= {todo.title} 
              onChange={(e)=>{
                todo.title = e.target.value
                setTodo({...todo})
              }}/>
               <input 
              type="text" 
              name="content" 
              value= {todo.content} 
              onChange={(e)=>{
                todo.content = e.target.value
                setTodo({...todo})
              }}/>
              <div>
                <button 
                className="m-2 p-2 bg-blue-300"
                onClick={()=>modify(todo)}
                >MOD</button>

                <button 
                className="m-2 p-2 bg-red-700"
                onClick={()=>remove(todo.tno)}
                >DEL</button>
              </div>
            </div>
        </div>
    );
}


export default TodoRead;