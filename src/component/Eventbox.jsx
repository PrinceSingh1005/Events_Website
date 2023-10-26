import React from 'react'

const Eventbox = (props) => {
  return (
    <div className=''>
        <div className="bg-white m-4 lg:h-80 w-96">
      </div>
      <p className='font-semibold xl mx-4'>{props.children}</p>
    </div>
  )
}

export default Eventbox