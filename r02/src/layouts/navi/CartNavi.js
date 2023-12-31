import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../../reducers/cartSlice";


const CartNavi = () => {

    const {email, nickName} = useSelector(state => state.login)

    const {items} = useSelector(state => state.cart)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCartThunk)
        
        if(!email){
            return
        }

    },[email])


    return ( 
        <div className="text-4xl text-red-500">
            CART - {items.length}
        </div>
     );
}
 
export default CartNavi;