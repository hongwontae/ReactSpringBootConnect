import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/board/read/ReadComponent";
import ReplyWrapper from "../../components/reply/ReplyWrapper";

const ReadPage = () => {

    const {queryObj,moveList} = useQueryObj()
    const {bno} = useParams()
    
    
    console.log(bno)
    console.log(queryObj)

    return (  
        <div className="font-bold">
            Board Read  Page

            <ReadComponent bno={bno}></ReadComponent>

            <span className="border-2 border-black">
            <button onClick={e => moveList()}> List</button>
            </span>

            <ReplyWrapper bno={bno}></ReplyWrapper>
        </div>
    );
}
 
export default ReadPage;