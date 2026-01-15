import axios from 'axios'
import { getProduct } from '../productSlice';

// export const asyncgetProdcut = async()=>{
//     try {
//         const response = await axios.get("https://fakestoreapi.com/products") ;
//         // abb yah se hum call kare abb getProduct ko , but get Product yak actions  hai so hume dispatch ise karna padega 

//     } catch (error) {
//         console.error(error)
//     }
// }

export const asyncgetProdcut = ()=>async (dispatch , getState)=>{
    try {
        const response = await axios.get("https://fakestoreapi.com/products") ;
       dispatch(getProduct(response.data));
    } catch (error) {
        console.error(error)
    }
}


// ()=>()=>{} --> ye ho gaya yak higher order function yak function yak function ko retrun karra hai 
