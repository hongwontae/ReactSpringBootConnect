const TodoList = ({ todos, requestView }) => {
    return (
        <div
            className="w-full h-[30vh] bg-green-300">
            List Area

            <ul>
                {todos.map(t => <li
                    key={t.tno}
                    onClick={() => requestView(t.tno)}
                > {t.tno}- {t.title} {t.content}</li>)}
            </ul>


        </div>
    );
}

export default TodoList;