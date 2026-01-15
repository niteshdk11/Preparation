import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import FormData from './FormData';

const Form = () => {
  const [dataUpdate, setDataUpdate] = useState([]);

  function getData(data) {
    // setDataUpdate([...dataUpdate, data]);
    setDataUpdate( prevData => [...prevData, data]);
  }

  function deleteCard(id){

    setDataUpdate(()=>dataUpdate.filter(( _ , idx)=>idx!=id));

    

  }


  
  return (
    <div className="h-screen w-screen bg-slate-500 items-center justify-center flex flex-col gap-10">
      <Cards dataa={dataUpdate} deleteCard={deleteCard} />
      <FormData funcn={getData} />
    </div>
  );
};

export default Form;
