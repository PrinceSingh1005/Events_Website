import React from 'react'

const Clubs = (props) => {
  return (

    <div className='card w-96 h-44 hover:h-64 transition-all rounded-xl mx-10 border bg-orange-300 cursor-pointer '>
      <div className='w-full h-full mx-auto translate-y-[-90px] z-10'>
        <img className='w-full h-full' src={props.clubUrl} alt={props.clubName} />
      </div>
      <div className='card_info h-full p-5 translate-y-[-230px] opacity-0'>

        <h1 className='text-black text-xl font-bold'>{props.clubName}</h1>
        <p className='text-black text-sm '>
          Be a part of one of the best coding Clubs in Nit Patna
        </p>


      </div>
    </div>
  )
}

export default Clubs
