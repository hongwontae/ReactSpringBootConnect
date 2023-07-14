import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../reducers/todoslice";

const TodoInput = () => {

    const [text, setText] = useState('') 

    const dispatch = useDispatch()

    const handleClickSave = () => {
        dispatch(addTodo(text))
    }

    return ( 
        <div>
            Todo Input
            <input type="text" value={text} onChange={(e) => e.target.value}></input>
            <button onClick={handleClickSave}>Save</button>
        </div>
     );
}
 
export default TodoInput;