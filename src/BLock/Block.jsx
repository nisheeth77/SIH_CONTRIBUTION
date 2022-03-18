import React from 'react';

import {GiNotebook} from "react-icons/gi";
import {BiChevronRight} from "react-icons/bi";

const Block = (props) => {
  return (
    <>
        <div className='flex items-center justify-center gap-2 bg-bms3-800 w-1/6 m-4 py-2 px-2 rounded-lg '>
            <GiNotebook className='w-6 h-6'/>
            <h5 className="text-sm text-gray-500">{props.title}</h5>
            <BiChevronRight className='w-4 h-6 text-white'/>
        </div>
    </>
  )
}

export default Block