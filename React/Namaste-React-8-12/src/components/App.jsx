import { useState } from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from '../utils/appStore'

 const App = () => {
    
     
let [username , setUsername] = useState("Deafult")


     return (
        <>
        {/* <UserContext.Provider value={{user:"Nitesh"}}>

        <div className="main w-screen min-h-[100vh] p-4 bg-slate-700 ">
        <UserContext.Provider value={{user:"Rakesh"}}> // rakesh
    <Nav></Nav>
    </UserContext.Provider>
<Outlet/>
        </div>
        </UserContext.Provider> */}

      <Provider store={appStore}>  
<UserContext.Provider value={{user: username , setUsername:setUsername}}>
       <div className="main w-screen min-h-[100vh] p-4 bg-slate-700 ">
   <Nav></Nav>
<Outlet/>
       </div>
       </UserContext.Provider>
       </Provider>
         </>
         
     )
}

export default App;