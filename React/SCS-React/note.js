// LEC - 17 
//  Intergrate an api , using axios , get and post is done 
//  UseEffect()  , like callback function in use effect is called when the component is mounted  &  the callbakc funbction that is returing from the use efffect is called when the componenet is unmounted . 


// 18 
//  agar hum chatate hai ki state change hone se bar bar like rerender na ho , to hum useeffect ke 2nd para me empty array dal do [] mt

//  agar app vo mt array me kuch state variable ka nam doge then , appka  component refresh hoga when your dependicies array me change hoga tab 

//  ! LEC 19 

//  3 steps 
//  1. creating a context 
// 2 .   wrap the context 
//  3.  useing context 

// import  { createContext, useState } from 'react'
// export const UserContext = createContext();

// const Context = (props) => {
//     const [user, setUser] = useState([
//         {
//             name:"nitesh"
//         },
//         {
//             name:"rakesh"
//         },
//     ])
    
//   return <UserContext.Provider value={[user ,setUser]}>{props.children}</UserContext.Provider> ;
// }

// export default Context ;


// import Context from './utils/Context';
// <Context>
// <BrowserRouter>
// <Service/>
// {/* <MainRoute/> */}
// </BrowserRouter> 
// </Context>


// import  { useContext } from 'react'
// import { UserContext } from '../utils/Context'

// const [user, setUser] = useContext(UserContext)
// now we can use {user}