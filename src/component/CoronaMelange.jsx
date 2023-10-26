import React from 'react'

const CoronaMelange = () => {
  return (
    <div className='flex p-24 bg-gradient-to-b from-purple-700 to-purple-600 text-white'>
        <div className='w-3/5'>
            <p className='text-5xl font-bold pt-3 leading-tight text-center py-4'>Experience the Best of Corona<br /> and Melange</p>
            <h1>During the fest, we provide a wide range of facilities and services to ensure an unforgettable
experience for all participants. From state-of-the-art venues to top-notch accomodations, we 
have everything you need to make the most of your time at Corona and Melange.</h1>
        </div>
        <img className='ml-20' src={require('../images/Corona&Melange.png')} height={300} width={300} />
    </div>
  )
}

export default CoronaMelange