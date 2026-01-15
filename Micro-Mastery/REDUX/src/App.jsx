import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment , decrement , asyncFuncn } from './store/counter';


function App() {
  let val = useSelector(state => state.counter.value);

  let dispatch = useDispatch();
  
  return (
    <>
    <div className='h-screen w-screen bg-gray-900'>
      <h1 className='text-3xl tracking-wider text-amber-50 text-center font-bold '>
        Counter 1234 : {val}
      </h1>
      <button onClick={()=> dispatch(increment())} className='px-4 py-2 rounded-lg m-2 text-xl bg-slate-400'>Increment</button>
      <button onClick={()=> dispatch(increment())} className='px-4 py-2 rounded-lg m-2 text-xl bg-slate-400'>Decrement</button>
      <button onClick={()=> dispatch(asyncFuncn(10))} className='px-4 py-2 rounded-lg m-2 text-xl bg-slate-400'>Decrement - by 10</button>
    </div>
    </>
  );
}

export default App;
