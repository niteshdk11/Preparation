import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import Form from './Components/formPractice/Form';
import MainRoute from './Components/Routes/MainRoute1';
import { BrowserRouter } from 'react-router-dom';
import Context from './utils/Context';

import Service from './Use_effec_Context/Service';

const App = () => {

// let [data ,setData] = useState({
//   name:'',
//   age: 0 ,
// });

// let {register , handleSubmit } = useForm();


//   let name = useRef(null)
//   let age = useRef(null)



//   function handleSubmit (e){


//     e.preventDefault();
// console.log(name.current.value);
// console.log(age.current.value);

//   }


//   function handleSubmit2 (e){
//     e.preventDefault();



// console.log(data)

//   }
  
  
  
  return (
    <>
   {/* <form action="" onSubmit={handleSubmit}>
 <input ref={name} type="text" />
 <input  ref={age} type="text" />
<button>submit</button>

   </form> */}


   {/* <form action="" onSubmit={handleSubmit2}>
 <input  onChange={(e)=>setData({...data , name:e.target.value})} type="text" />
 <input   onChange={(e)=>setData({...data , age:e.target.value})} type="text" />
<button>submit</button>

   </form>
     */}

     

   {/* <form action="" onSubmit={handleSubmit(data => console.log(data))} >
 <input {...register('name')}  type="text" />
 <input   {...register('age')}  type="text" />
<button>submit</button>

   </form>
     */}


{/* <Form/> */}
{/* 
<BrowserRouter>
<MainRoute/>
</BrowserRouter> */}




<Context>
<BrowserRouter>
<Service/>
{/* <MainRoute/> */}
</BrowserRouter> 
</Context>
    </>
  )
}

export default App