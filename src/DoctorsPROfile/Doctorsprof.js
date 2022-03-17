import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";


const Doctorsprof = () => {
    return (
        <>
            <div className='flex flex-col gap-3 bg-gray-200 p-2 rounded-xl '>
                {/* profile */}
                <div className='flex items-center justify-center gap-2'>
                    {/* image */}
                    <div>
                        <FaUserCircle className=' w-12 h-12   rounded-full ' />
                    </div>
                    {/* info */}
                    <div>
                        <h1 className=" font-bold text-gray-800">Dr.Sonali Jain</h1>
                        <h5 className="text-xs text-gray-500">PHYSICIAN/INTENAL/MEDICINE/COVID CONSULT</h5>
                        <h1 className="text-xs font-bold text-gray-800">31 YRS EXP.</h1>
                        <h5 className="text-xs text-gray-500">MBBS,MD (Internal Medicine)</h5>
                    </div>
                </div>
                {/* pay */}
                <div className='flex flex-col items-center justify-center'>
                    
                    <h4 className=" text-xs font-bold text-gray-800">You Pay</h4>
                    <h1 className='flex items-center font-bold text-blue-400'>
                    <FaRupeeSign/>  800
                        </h1>
                    
                </div>
                {/* button */}
                <div className='flex gap-1 w-full'>
                    <button className='bg-orange-400 py-1 px-2 rounded-lg w-1/2'>
                        Book Appointment
                    </button>
                    <button className='bg-blue-200 py-1 px-2 rounded-lg w-1/2'>
                        Book Appointment
                    </button>
                </div>
            </div>

        </>
    )
}

export default Doctorsprof;