import React from "react";
import { IMAGE_URL } from "../utils/Constants";

import { useDispatch } from "react-redux";
import {addItem} from '../utils/cartSlice'

const ItemsList = ({ item }) => {
const disPatch = useDispatch();

  const handleItem = (itm)=>{
  //  dispatch an action 
disPatch(addItem(itm))
// {
//   payload:"pizza"
// }

 
  }
  
  
  return (
    <div className="flex flex-col gap-2">
      {item.map((itm) => {
        return (
          <div
            key={itm.card.info.id}
            className=" w-full relative rounded-md items-center flex justify-between  text-amber-100 px-4 py-2   bg-gray-500 "
          >
            <div className="right flex flex-col gap-2">
              <div>
                <h1 className="text-md font-semibold">{itm.card.info.name}</h1>
                <h2 className="text-sm italic font-semibold">
                  ₹
                  {itm.card.info.price / 100 ||
                    itm.card.info.defaultPrice / 100}
                </h2>
              </div>

              <div>
                <button
                  className={`px-2 $ bg-red-400   text-sm py-1  rounded-md ml-2`}
                >
                 {
                    itm.card.info.isVeg ? "VEG" : "NON-VEG"
                  }
                </button>
                <button
                  className={`px-2 $ bg-green-400 text-sm py-1    rounded-md ml-2`}
                >
                 {
                    itm.card.info.inStock ? "In Stock" : "Out of Stock"
                  }
                </button>
              </div>

              <p className="text-sm text-white-400 tracking-normal w-[80%] leading-5">
                {" "}
                {itm.card.info.description}
              </p>
            </div>

            <img
              className="w-36  object-contain  rounded-lg"
              src={IMAGE_URL + itm.card.info.imageId}
              alt=""
            />
    <button onClick={()=>handleItem(itm)} className="absolute text-xl rounded-full h-8 w-8 p-1 top-2  right-1 bg-red-400">+</button>

          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
