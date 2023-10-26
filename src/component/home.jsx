import React from 'react'
import NavMenu from './NavMenu'
import data from './data.js'
import TypingAnimation from './TypingAnimation'
function HomePage() {
  return (
    <div className="home-page pt-5 pl-5 h-screen sm:w-auto">
      <div className='flex'>{data.links.map((link) => (
        <NavMenu className="flex"
          key={link.name}
          link={link}
          {...link}
        />
      ))}
        <div className="nav-logo flex mx-28">
          <img className='logo h-14 ml-36' src={require('../images/Frame 27.png')} alt="TCF Logo" />
          <img className='logo h-14' src={require('../images/NITP_Logo2 2.png')} alt="TCF Logo" />
        </div>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className="home-content p-8 pl-24 mt-28 w-2/4">
          <TypingAnimation text="Experience the Fusion of Technology and Culture" />
          <p className="text-lg pt-6 pb-6 mt-24 h-40">
            Join us for the most exciting event of the year, where you can witness
            the latest innovations and trends in the tech world, as well as enjoy
            the rich and diverse cultural performances and activities.
          </p>
          <button className="p-2 border border-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" >
            View Events
          </button>
        </div>
        <div className='w-1/2 h-4/5'>
          <img className='float-right' src={require('../images/Leonardo_Diffusion.png')} alt="" width={'75%'}/>
        </div>

      </div>

    </div>
  )
}


export default HomePage