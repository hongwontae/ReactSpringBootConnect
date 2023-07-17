import { useDispatch } from "react-redux";
import { des, inc } from "../reducers/countslice";

const CounterButton = () => {

    const dispatch = useDispatch()

    const handleClickInc = () => {
        dispatch(inc(2))
    }

    const handleClickDes = () => {
        dispatch(des(2))
    }

    return ( 
        <div>
            <button onClick={handleClickInc}>INC</button>
            <button onClick={handleClickDes}>DES</button>
        </div>
     );
}
 
export default CounterButton;