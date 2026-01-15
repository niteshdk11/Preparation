import Shimer from '../utils/Shimer';
import { IMAGE_URL } from '../utils/Constants';
import { useParams } from 'react-router-dom';
import {useRestMenu} from '../utils/useRestroMenu'
import RestCategory from './RestCategory';
import { useState } from 'react';


const ResturantMenu = () => {

let[ showIdx , setShowIdx] = useState(0);


let {id} = useParams() ;
let  restMenu  = useRestMenu(id)
if( restMenu === null) return  <Shimer/> ;
let {name  , cloudinaryImageId ,costForTwoMessage , cuisines , locality , city} = restMenu[2].card.card.info ;

let category = restMenu[4].groupedCard.cardGroupMap.REGULAR.cards.filter((crd)=>{
  return crd?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ;
}) ;


  return (
    <div className='w-screen py-4 overflow-hidden flex flex-col items-center   justify-center  '>

<div className="card rounded-xl h-[32vh] w-1/2 bg-red-700 flex items-center p-4 ">
<div className="detls w-1/2 h-2/3 flex justify-center flex-col ">
    <b className='text-3xl mb-8 font-medium text-white leading-10'>{name}</b>
    <p className=' italic text-xl text-white opacity-90'>{cuisines.join(",")}</p>
    <p className='text-3xl text-black font-bold'>{costForTwoMessage}</p>
    <p className='text-xl  text-blue-700'>At { `${locality} ,  ${city}`}</p>
</div>

<img className='h-full w-1/2 rounded-2xl object-cover' src={ IMAGE_URL +cloudinaryImageId} alt="" />

</div>

<div className="heading my-8 text-2xl tracking-wider font-semibold text-amber-50/80 "> MENUS:-</div>


{
  category.map((ctr ,idx)=>(
    
    
 <RestCategory key={idx} data={ctr.card.card} show={idx  == showIdx && true}   setShowIdx={()=>setShowIdx(idx)}/>
))
}


    </div>
  )
}

export default ResturantMenu ;