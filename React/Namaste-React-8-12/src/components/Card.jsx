import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Cart = ()=>{

const cartItems = useSelector((store)=>store.card.items)
const dispatch = useDispatch();

    return (<>

  
    {
        cartItems.length === 0 ? <h2 className="text-2xl m-10 text-red-600 text-center">There is no items in your carts</h2> : null
    }
   <div className="w-2/3 mx-auto">
   <button className="px-4 py-2 rounded-lg
     bg-violet-500 m-2 text-xl" onClick={()=>{dispatch(clearCart())}}>Clear all Cart</button>
   <ItemsList item={cartItems}/>
    
   </div>
    
    </>)
}

export default Cart;