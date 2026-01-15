// import { createSlice } from "@reduxjs/toolkit";


// const cartSlice = createSlice({
//     name:"cart",
//     initialState:{
//         item:[] ,
//     } ,
//     reducers:{
//         // mutating the state over here 
//         addItem:(state , action)=>{
//             state.item.push(action.payload); // dispatch(addItem("pizza"))
//         },
//         removeItem:(state)=>{
//             state.item.pop() ;
//         } ,
//         clearCart:(state)=>{
//             state.item.length = 0 ;
//         }
//     }
// }) 

// export const {addItem , removeItem , clearCart} = cartSlice.actions ;

// export default cartSlice.reducer ;

import { createSlice, current } from "@reduxjs/toolkit";


const cardSlice = createSlice({
    name:"card",
    initialState:{
        items:[]
    },
    reducers:{

        // { // thisi s  the action behind the scene
//   payload:"pizza"
// }

        addItem:(state , action)=>{


//  in vanialaa Redux
//  dont mutate the state , returing was compslory 
// const newState = [...state];
// newState.push(action.payload);
//  retrun newState;




            // changes in real  items 
           state.items.push(action.payload)
        },
        removeItem:(state )=>{
            state.items.pop()
        },
        clearCart:(state )=>{

            //  console.log(state) will not work here you will need to use curret state , and the cureent its impreted from  "@reduxjs/toolkit" ;
            // console.log(current[state])
            
            //  RTK - either Mutate the existing state or retuen a new state 

            state.items = []
            // return {items: []} // it will also work 
        }
    }
})

//cardSlice =  {
// actions:{
// additem 
// } ,
// reducer:
// }
export const{addItem , removeItem , clearCart}  = cardSlice.actions ;

export default cardSlice.reducer;

