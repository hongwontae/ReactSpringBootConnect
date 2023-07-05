import uuid from 'react-uuid'
import TodoList from './TodoList';
import TodoRead from './TodoRead';
import TodoInput from './TodoInput';
import { useState } from 'react';

const Todo = () => {

    // todo를담기위한 state 변수 배열
    const [todos, setTodos] = useState([])
    // read 에 넣어주기위한 useState 객체
    const [current,setCurrent] = useState(null)

    // todos에 add하는 함수
    const addTodo= (addObj)=>{
        console.log("check addobj",addObj)
        //todos에는 addobj + uuid로 tno값을잡는다.
        setTodos([...todos,{tno:uuid(),...addObj}])
    }

    //read 영역은 tno값을 통해 알아낸다
    const requestView = (tno)=>{
        // filter로 실제 값 잡고 setCurrent에 넣어주기
        const target = todos.filter(todo=> todo.tno === tno)[0]
        
        console.log("requestView ", target)

        setCurrent({...target})
        // setCmd("read")

        
    }

    const remove = (tno)=>{
        setTodos(todos.filter(todo => todo.tno!==tno))
        setCurrent(null)
    }

    const modify = (modified) =>{

        const target =todos.filter(todo =>todo.tno===modified.tno)[0]

        target.title = modified.title
        target.content = modified.content

        setTodos([...todos])
        setCurrent(null)
    }   

    // index를 상위컴포넌트로 잡는다.
    return (
        <div>
            <TodoList todos={todos} requestView={requestView}></TodoList>
            <TodoRead current={current} remove={remove} modify={modify}></TodoRead>
            <TodoInput addTodo={addTodo}></TodoInput>
        </div>
    );
}

export default Todo;