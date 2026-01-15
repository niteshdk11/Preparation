import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
    name: "counter",
    initialState:{
        value:0
    },
    reducers:{
        increment :(state)=>{
            state.value = state.value + 1;
            } ,
            decrement: (state)=>{
                state.value = state.value - 1;
            },
            incrementByVal:(state , action)=>{
                    state.value += action.payload;
            }
    }
})

export default counterSlice.reducer;
export let {increment , decrement , incrementByVal} = counterSlice.actions;

export  const asyncFuncn = (amount)=>(dispatch)=>{
    setTimeout(()=>{
       dispatch(incrementByVal(amount));
    } , 2000)
}