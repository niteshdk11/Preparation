import Card from './Card'

const Cards = ({dataa , deleteCard}) => {




  return (
    <div className=' w-screen flex justify-center items-center gap-10 flex-wrap'>

{  dataa.length > 0 ? (
   dataa.map((item , idx)=>{

    return <Card key={idx} data={item} id={idx}  deleteCard={deleteCard}/>
  }) ) : <h2  className='text-red-300 text-xl'>Cards is empty</h2>
}

    </div>
  )
}

export default Cards ;