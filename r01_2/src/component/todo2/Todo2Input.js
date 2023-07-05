import { useState } from "react"
import { postTodo } from "../../api/todoAPI"

const initState = {title:''}

const Todo2Input = ({changeView}) => {

    const[todo, setTodo] = useState(initState)

    // input type 처리
    const handleChangeTodo = (e) =>{
        // 동적처리를 통한 value값설정하기
        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }

    return ( 
        <div className="w-full h-[100vh] bg-purple-500">
        <div className="text-3xl"> Todo2 Input </div>
        <div className="text-2xl m-2 p-2 border-2">
            <input type="text" name="title" value={todo.title} onChange={handleChangeTodo}></input>
            
        </div>
        {/* 가장 중요함 PRG 패턴을 벗어나게된다. */}
            <button onClick={()=>{
                postTodo(todo).then(newTodo => 
                    {alert("새로운 TODO " +newTodo.tno)
                    changeView("list")
                } )
            }
            }>Register</button>
        </div>
     );
}
 
export default Todo2Input;