// Install @reduxjs/toolkit and react-redux

// Build our store, using config store 

// Connect our store to our app, using Provider wrapping with Provider 

// Slice (cartSlice) , using create slice and export redures and actions 
//  link slice to app store , as a reducer of slice in app store 

// Dispatch (action)

// Selector

//  ? Asynchronus JS use karna hai in RED

incrementByVal:(state , action)=>{
    setTimeout(()=>{
        state.value += action.payload;
    })
}
// counter.js:17 Uncaught TypeError: Cannot perform 'get' on a proxy that has been revoked

// * wrapper actions 
export  const asyncFuncn = (amount)=>(dispatch)=>{
    setTimeout(()=>{
       dispatch(incrementByVal(amount));
    } , 2000)
}


