import React from 'react'
import {IMAGE_URL} from '../utils/Constants' 
import { Link } from 'react-router-dom';


const RestroCard = ({data}) => {
  let {
    name,
    cloudinaryImageId,
    locality,
    cuisines,
    avgRating,
    id ,
    costForTwo,
  } = data.info;

  


  return (
          

    
      <>
      
      
      
    <Link to={`/rest/${id}`}>
    <div className="card relative   text-amber-200 bg-base-100 h-[480px]  w-80 shadow-xl rounded-md overflow-hidden bg-slate-500">
    <img
      src={IMAGE_URL + cloudinaryImageId}
          alt="Shoes" className='h-64 w-full' />
        


  <div className="card-body  mt-4 p-2">
          <h2 className="card-title font-medium">{name}</h2>
          <p className='italic w-[70%]  tracking-wider font-light'>{cuisines.join(",")}</p>
          <h3 className='font-bold tracking-wide text-amber-50'>{avgRating} stars</h3>
          <h3 className='font-bold tracking-wide  text-yellow-400'>{locality} </h3>
          <h3 className='font-bold tracking-wide text-xl text-green-200'>{costForTwo}</h3>

      <button className="absolute bottom-2 right-2 px-4 rounded-md py-2 bg-green-500">Buy Now</button>
  </div>
</div></Link>
      
      </>
  )
}

export default RestroCard ;


// ! higher order component 

 export const withPromoted = (RestroCard)=>{

  return (props)=>{

return (

  <div>

<label className='relative top-7 px-2 py-1 bg-pink-600 z-10 rounded-md' >Open</label>
<RestroCard  {...props}>

</RestroCard>

</div>
)

  }
 }