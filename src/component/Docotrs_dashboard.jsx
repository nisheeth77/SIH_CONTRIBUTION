import React from 'react'
import { FaUserCircle } from "react-icons/fa"

const Docotrs_dashboard = () => {
    return (
        <>
            <div className='flex items-center gap-4 justify-evenly m-4 bg-bms3-50'>
                {/* profile icon */}
                <div className='flex flex-col items-center gap-1' >
                <FaUserCircle className=' w-10 h-10   rounded-full '/>
                <h5 className="text-sm text-gray-500">View Profile</h5>
                </div>
                {/* details */}
                <div className='flex flex-col gap-1'>
                    <h2 className='font-semibold'>
                        Name:Rayansh Srivastva
                    </h2>
                    <div className='flex gap-12'>
                    <h5 className="text-sm text-gray-500">Age:20</h5>
                    <h5 className="text-sm text-gray-500">Gender : Male</h5>
                    </div>
                </div>
                {/* date */}
                <div>
                <h2 className='font-semibold flex items-center'>
                        Date
                    </h2>
                </div>
                {/* buttons */}
                <div className='flex flex-col items-center gap-4 '>
                    <button className='bg-navbarbg-500 text-xs px-4 rounded-xl text-white'>Accept</button>
                    <button className='bg-navbarbg-600 text-xs px-4  rounded-xl text-white'>Decline</button>
                </div>
            </div>
        </>
    )
}

export default Docotrs_dashboard;