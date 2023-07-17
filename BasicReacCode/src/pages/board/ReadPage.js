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
        <div>

            <ReadComponent bno={bno} moveList={moveList}></ReadComponent>   

            
            <ReplyWrapper bno={bno}></ReplyWrapper>
        </div>
    );
}
 
export default ReadPage;