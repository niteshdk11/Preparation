import React from 'react'

const Card = ({data  ,deleteCard ,id}) => {


  return (
    <div className='h-[224px] flex flex-col  w-[194px] bg-slate-600 p-2 rounded-md overflow-hidden gap-2'>
   <img className='w-full h-2/3 rounded-md  ' src={data.image}            alt="profile Image" />
<div className="cnt pl-2">
  <h1 className='text-white text-md '>{data.name}</h1>
  <h2 className=' text-white text-sm italic'> {data.place}</h2>
</div>
<button className='px-2 py-1 w-1/3 self-center rounded-md  bg-red-400' onClick={()=>deleteCard(id)}>Delete</button>
    </div>

  )
}

export default Card