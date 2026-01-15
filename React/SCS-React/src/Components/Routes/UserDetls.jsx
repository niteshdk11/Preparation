import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'


const UserDetls = () => {

    const {name} =  useParams();
    let navigate = useNavigate();
       const gobackhandler = ()=>{
   
     navigate(-1) // will move backward by 1 
   //   navigate("/users")
    
   
       }
  return (
    <div className='m-4'>

 <h2 className='text-2xl italic  text-white mx-auto'>  {name}</h2>


<button onClick={gobackhandler} className='px-4 py-2 m-3 rounded-xl bg-slate-400' >Back</button>


    </div>
    
  )
}

export default UserDetls