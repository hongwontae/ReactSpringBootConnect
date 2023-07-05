import { useState } from "react";

const TodoInput = ({ addTodo }) => {

    const [todo, setTodo] = useState({ title: '', content: '' })

    return (
        <div
            className="w-full h-[30vh] bg-amber-300"
        ><div className="m-3 p-3 font-extrabold">Input Area</div>
            <input
                className="m-3 p-3 bg-blue-300"
                type="text" name="title"
                value={todo.title}
                onChange={(e) => {
                    todo.title = e.target.value
                    setTodo({ ...todo })
                }
                }
            >

            </input>
            <input
                className="m-3 p-3 bg-blue-300"
                type="text" name="content"
                value={todo.content}
                onChange={(e) => {
                    todo.content = e.target.value
                    setTodo({ ...todo })
                }
                }
            >

            </input>
            <button
                    className="bg-blue-300 m-3 p-3 border-2" 
                    onClick={()=>{
                        addTodo(todo)
                        setTodo({title:'', content:''})
                    }}
                    >
                    ADD todo
                </button>
        </div>
    );
}

export default TodoInput;