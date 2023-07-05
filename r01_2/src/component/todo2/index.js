import { useState } from "react";
import { getList } from "../../api/todoAPI";
import Todo2List from "./Todo2List";
import Todo2Input from "./Todo2Input";

const Todo2 = () => {
    // 서버와 통신하는지 확인용
    // getList()

    const [cmd, setCmd] = useState("list")

    //tno를 받는 useState
    const [target, setTarget] = useState(0)
    // 화면을 전환할때 쓰는 함수
    const changeView = (value) => {
        setCmd(value)
    }

    // 명령어에따른 view가 나오게하는 함수
    const getView = () => {

        if (cmd === "list") {
            return <Todo2List changeView={changeView}></Todo2List>
        } else if (cmd === "input") {
            return <Todo2Input changeView={changeView}></Todo2Input>
        } else if (cmd === "read") {
            return <Todo2Read target={target} changeView={changeView}></Todo2Read>
        }
    }

    return (
        <>
            <div className="w-full h-24 bg-blue-500 flex justify-center">
                <div className="border-2 text-white w-32" onClick={() => changeView("list")}>LIST</div>
                <div className="border-2 text-white w-32" onClick={() => changeView("input")}>INPUT</div>
                <div></div>
            </div>
            <div>
                {getView()}
            </div>
        </>
    );
}

export default Todo2;