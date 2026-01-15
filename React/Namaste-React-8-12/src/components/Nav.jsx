import { RiMenuFill } from "react-icons/ri";
import{ LOGO_URL} from '../utils/Constants'
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext } from "react";
import UserContext from '../utils/UserContext'
import { useSelector } from "react-redux";

const Nav = () => {
    
const data = useContext(UserContext);
let onlineStatus = useOnlineStatus();

let cart = useSelector((store)=>store.card.items)

    return (
        <>
        
        
        <nav className="w-screen  p-4 px-16 flex  items-center justify-between h-10vh">
                 <img className="w-16 h-16 rounded-full" src={LOGO_URL} alt="" />
                 <RiMenuFill  className="text-3xl sm:hidden" />
                  
                  <h2 className="text-xl text-white">Online Status :  {onlineStatus ?   "🟢" : "🔴"}</h2>
                 <div className=" sm:flex  text-amber-50 navElems hidden items-center gap-10">
               
                 {
    ["Home", "About", "ContactUS", "Grocery" ].map((elem, idx) => {
        const linkTo = elem === "Home" ? "/" : `/${elem}`;
        return (
            <Link to={linkTo} key={idx}>
                {elem}
            </Link>
        );
    })
}

{/* <p>{data.user}</p> */}
<Link to={"/cart"} className="font-bold text-pink-300">Cart : {cart.length}</Link>
                 </div>
                 
             </nav>
        
        </>
    )
}

export default Nav;
