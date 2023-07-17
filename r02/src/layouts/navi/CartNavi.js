import { useSelector } from "react-redux";


const CartNav = () => {

    const {items} = useSelector(state => state.cart)

    return ( 
        <div className="text-xl text-white bg-pink-400">
            Cart - {items.length}
        </div>
     );
}
 
export default CartNav;