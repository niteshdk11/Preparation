import  { createContext, useState } from 'react'


export const UserContext = createContext();


const Context = (props) => {

    const [user, setUser] = useState([
        {
            name:"nitesh"
        },
        {
            name:"rakesh"
        },
        {
            name:"akshay"
        },
    ])
    
  return <UserContext.Provider value={[user ,setUser]}>{props.children}</UserContext.Provider> ;
}

export default Context ;


