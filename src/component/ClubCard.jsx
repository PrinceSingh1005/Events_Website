import React from 'react'
import Clubs from './clubs'

const ClubCard = () => {
    const Club_logo = [
        { url: require('../images/Club_logo (1).png'), name: 'HackShlash Club' },
        { url: require('../images/Club_logo (2).png'), name: 'IEEE Club' },
        { url: require('../images/Club_logo (3).png'), name: 'Robotics Club' },
        { url: require('../images/Club_logo (4).png'), name: 'ASCE Club' },
        { url: require('../images/Club_logo (5).png'), name: 'ASME Club' }
    ]
    return (
        <div className='bg-gradient-to-b from-purple-600 to-purple-500 pt-4'>
            <h1 className='text-4xl pl-14 font-semibold mx-auto'>Clubs</h1>
            <div className='h-[480px] flex justify-center items-center px-11 shadow-white pb-8'>

                {Club_logo.map(club => (
                    <Clubs
                        key={club.url}
                        clubName={club.name}
                        clubUrl={club.url}
                    />
                ))}
            </div>
        </div>
    )
}

export default ClubCard