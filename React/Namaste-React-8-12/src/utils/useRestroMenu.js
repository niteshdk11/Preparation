import { useState , useEffect } from "react";
import { MENU_URL } from "./Constants";



export const useRestMenu = (id) =>{


let [info,setInfo] = useState(null);

    useEffect(()=>{

fetchData();
    },[])

    async function fetchData(){

        try {
            let res= await fetch(MENU_URL + id ) ;
   

            let data =  await res.json() 


            setInfo( data.data?.cards) ;

         } catch (error) {
            console.log(error) ;
         }
    }

    return info ;
}


