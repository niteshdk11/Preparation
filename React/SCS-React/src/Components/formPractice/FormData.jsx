import React from 'react'
 import { useForm } from 'react-hook-form';

 
const FormData = ({funcn}) => {

let {register , handleSubmit ,reset } = useForm();

function handleFormSubmit (data){

  funcn(data);
  reset();
  
}

  return (
    <div>

<form action="" className='flex gap-2' onSubmit={handleSubmit( handleFormSubmit)} >
<input {...register('name')}  placeholder='name' className='outline-none text-black rounded-md pl-4 text-sm'  type="text" />
<input {...register('place')} placeholder='place'  className='outline-none text-black rounded-md pl-4 text-sm'  type="text" />
<input {...register('image')} placeholder='imageUrl'  className='outline-none text-black rounded-md pl-4 text-sm'   type="text" />
<button className='px-4 py-2 text-xl bg-green-500 rounded-md '> submit</button>
</form>


    </div>
  )
}

export default FormData