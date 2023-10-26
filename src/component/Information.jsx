import React from 'react'

const Information = () => {
  return (
    <div className='flex p-14 bg-gradient-to-b from-purple-900 from 60% to-purple-800'>
      <div className="bg-gray-200 my-4 lg:w-5/12 h-[30vw] md:h-[40vw] ">
      </div>
      <div className='my-4 mx-16 p-5 lg:w-1/2 md:pl-8 py-8'>
        <div className="flex flex-col text-white my-8">
          <p className="font-semibold sm:text-3xl my-2 text-5xl">"Exciting Fest Highlights Await"</p>
          <p className="text-lg text-[#929292]">"Join us for a thrilling celebration of Technology and culture at Corona and
            Melange, the Annuual fest of NIT Patna. Experience a wide range of events,workshops, performances, and more."</p>
        </div>
        <div className="flex flex-col text-white">
          <p className="font-semibold sm:text-3xl my-2 text-5xl">"Unforgettable Experiences Await"</p>
          <p className="text-lg text-[#929292]">"Get ready to be amazed by the incredible lineup of activities at Corona and
            Melange. From technical competitions to art exhibitions, there's something for
            everyone to enjoy."</p>
        </div>
        <div className="flex flex-col text-white my-8">
          <p className="font-semibold sm:text-3xl my-2 text-2xl">"Engaging Workshops and Talks"</p>
          <p className="text-lg text-[#929292]">"Expand your knowledge and skills through interactive workshops and insightful
            talks by industry experts. Don't miss this opportunity to learn from the best."</p>
        </div>
      </div>
    </div>
  )
}

export default Information