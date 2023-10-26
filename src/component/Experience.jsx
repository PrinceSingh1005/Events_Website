import React from 'react'
const Experience = () => {
    return (
        <div className="flex bg-gradient-to-b from-purple-950 from 60% to-purple-900 sm:px-24 px-8 pt-16 pb-12 space-x-2 h-fit w-full flex-col text-white">
            <div>
            <div className="text-white py-3">Experience</div>
            <div className="flex lg:flex-row flex-col-reverse flex-wrap">
                <div className="h-auto lg:w-1/2  flex flex-col w-full space-y-9 flex-grow-1">
                    <p className="md:text-6xl text-3xl font-bold text-white">LOREM IPSUM</p>
                    <p className="pt-16 pb-12 text-white">Lorem ipsum</p>
                    <div className="flex space-x-2">
                        <div>
                            <img src={require('../images/bxs_cube.png')} width={50} height={50} alt="box" />
                            <p className="font-bold text-xl">"Technical"</p>
                            <p>"Experience the latest advancements in
                                technology through workshops,
                                competitions, and exhibitions"</p>
                        </div>
                        <div>
                            <img src={require('../images/bxs_cube.png')} width={50} height={50} alt="box" />
                            <p className="font-bold text-xl">"Cultural"</p>
                            <p>"Immerse yourself in the vibrant cultural
                                performances, art exhibitions, and music
                                concerts."</p>
                        </div>

                        
                    </div>
                    <button className="p-1 border border-white w-24">
                    Learn More
                    </button>
                    </div>

                    <div className="bg-gray-200 my-4 lg:w-1/2 w-full h-[30vw] md:h-[40vw] flex-grow-1">
                    </div>
                </div>
            </div>
            </div>
            )
}


            export default Experience