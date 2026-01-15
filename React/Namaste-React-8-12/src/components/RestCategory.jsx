import React, { useState } from 'react'
import ItemsList from './ItemsList'

const RestCategory = ({data , show , setShowIdx}) => {

  
  const showItems = ()=>{
 setShowIdx()

  }
    
  return (
    <div className='w-1/2 mx-auto'>

        <div className="  flex flex-col  ">

      <div onClick={showItems}  className=' cursor-pointer flex justify-between px-2  py-2  text-white bg-slate-500 m-2 rounded-lg shadow-md shadow-slate-400 text-md '>

      <h1 className='tracking-wide'>{data.title }  ({data.itemCards.length}) </h1>
      <h2>🔽</h2>
      </div>

     {
      show ?  <ItemsList   item={data.itemCards}/> : null
     }
        </div>
        
    </div>
  )
}

export default RestCategory