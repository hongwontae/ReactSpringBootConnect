import { useEffect, useState } from "react";
import { getList } from "../../api/todoAPI";

// 빈배열로 아예 빌경우 에러 대비
const ininState = {dtoList:[]}

const Todo2List = ({changeView}) => {

    // 실제로 데이터를 설정해줄 useState inint로 아예 빈배열일지 아닐지 확인하고 적용
    const [data, setData] = useState(ininState)
    // 렌더링후 1번만 일어나게 하는 useEffect
    // 서버의 데이터와 react의 데이터명을 맞춰준다.
    useEffect(()=>{
        getList().then(result=>{
            console.log(result)
            setData(result)
        })
    },[])

    return ( 
        <div className="w-full h-[100vh] bg-sky-500">
            <div className="text-3xl">
                Todo2 List 
                <button onClick={()=>changeView('input')}>INPUT</button>
            </div>
            <ul>
                {data.dtoList.map( todo =><li key={todo.tno}
                onClick={()=> changeView("read",todo.tno)}
                >{todo.tno} - {todo.title}</li>)}

            </ul>
        </div>
     );
}
 
export default Todo2List;