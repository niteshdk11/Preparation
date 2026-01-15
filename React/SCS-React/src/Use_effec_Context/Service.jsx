import  { useContext, useEffect } from 'react'
import Routing from '../utils/Routing'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../utils/Context'

const Service = () => {

const [user, setUser] = useContext(UserContext)

    useEffect(()=>{

    })
    
  return (
    <div className=''>


<nav className='flex  justify-center w-full'>
    <NavLink style={(e)=>{ return {backgroundColor: e.isActive ? "green" :"red"} }} className='px-4 py-2 bg-slate-700 text-white m-1 rounded-lg flex w-fit items-center justify-center' to='/'> Home</NavLink>
    <NavLink style={(e)=>{ return {backgroundColor: e.isActive ? "green" :"red"} }} className='px-4 py-2 bg-slate-700 text-white m-1 rounded-lg flex w-fit items-center justify-center' to='/about'> About</NavLink>
    
    </nav>

    <h2 className='text-4xl  p-4  text-green-500 '>
    {
       user.map((el ,idx)=>{
        return <p key={idx}>{el.name}</p>
       })
    }
    </h2>
    
        <Routing/>

    </div>
  )
}

export default Service