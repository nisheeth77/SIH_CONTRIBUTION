import React from 'react';

import { HiPencil } from 'react-icons/hi';
import { BiNotepad } from 'react-icons/bi';

const Dashboard = () => {
    return (
        <>
            <div className='mx-10'>
                
                    <div 
                    className=' mt-10
                                flex flex-wrap items-center justify-center gap-10 pb-4 md:gap-14 lg:gap-24
                                
                     '>

                        {/* profile */}

                        <div className='flex flex-col items-center '>
                            <div className='w-28 h-28'>
                                <img
                                    src="https://hips.hearstapps.com/esquireuk.cdnds.net/15/37/2048x2730/2048x2730-henry-cavill-43-jpg-3efbd12a.jpg?resize=480:*"
                                    alt=""
                                    className='w-full h-full rounded-full'
                                />
                            </div>
                            <h1 className="text-xl  text-gray-800">Sam Anderson</h1>
                            <h5 className="text-sm text-gray-500">smaghd@gmail.com</h5>
                            <h5 className="text-sm text-gray-500">+91 8749393993</h5>
                            <h5 className="text-sm text-gray-500">Male</h5>

                        </div>

                        {/* qr code */}

                        <div className='w-24 h-24 '>
                            <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"

                                alt=""
                                className='w-full h-full' />
                        </div>

                        {/* button */}

                        <div>
                            <div className='flex flex-col w-32 gap-6' >
                                <button
                                    className=' flex items-center gap-2 border-solid border-2 px-2'>
                                    Edit Profile <HiPencil />
                                </button>
                                <button className='bg-red-500 px-10 '>
                                    Help !
                                </button>
                            </div>
                        </div>

                    </div>
                
                {/* flex */}
                <div className='flex items-center justify-evenly flex-wrap gap-10 pt-4'>
                    <div className='flex flex-col items-center gap-2 bg-black p-10 rounded-xl '>
                        <BiNotepad className=' w-12 h-12  bg-navbarbg-700 rounded-full px-2'/>
                        <h2 className='text-white'>Prescription</h2>
                    </div>
                    <div className='flex flex-col items-center gap-2 bg-black  p-10 rounded-xl'>
                        <BiNotepad className=' w-12 h-12  bg-navbarbg-700 rounded-full px-2'/>
                        <h2 className='text-white'>Prescription</h2>
                    </div>
                    <div className='flex flex-col items-center gap-2 bg-black  p-10 rounded-xl'>
                        <BiNotepad className=' w-12 h-12  bg-navbarbg-700 rounded-full px-2'/>
                        <h2 className='text-white'>Prescription</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard