import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = ()=>{
    let { user} = useContext(UserContext)
    
    return (
        <>
        <h1>This is the Grocery</h1>
        <h1 className="bg-slate-400 text-black">{user}</h1>
        </>
    )
}


export default Grocery ;