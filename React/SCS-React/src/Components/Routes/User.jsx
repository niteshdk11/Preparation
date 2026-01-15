import React from 'react'
import {Outlet} from 'react-router-dom'


const User = () => {



  return (
    <div>
 <h2 className='text-2xl  text-white mx-auto'>  This is User Main</h2>
<Outlet/>        
    </div>
  )
}

export default User