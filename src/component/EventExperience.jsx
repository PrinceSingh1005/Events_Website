import React from 'react'
import Eventbox from './Eventbox'

const EventExperience = () => {
  return (
    <div className='bg-gradient-to-b from-purple-800 from 40% to-purple-700 text-white p-2'>
        <p className='p-10 m-4 text-3xl font-semibold'>Experience the Events</p>
        <div className='flex justify-around py-8'>
            <Eventbox >Explore a wide range of events
and competitions</Eventbox>
            <Eventbox >Connect with like-minded
individuals and form teams</Eventbox>
            <Eventbox >Experience the thrill of competing
and winning</Eventbox>
        </div>
    </div>
  )
}

export default EventExperience