import React from 'react';
import { BsFillLockFill } from 'react-icons/bs';
// import logo from './logo.png'


const Mobile = () => {
  return (
    <>
      <div>
      <div className='  container py-4 px-6 flex items-center justify-between   '>
        <div>
          {/* <h1 className='text-sm font-extrabold'>PARK CAPSULE</h1> */}
        </div>
        <div >
        <ul className=' container mx-2 my-1 px-4 flex items-center gap-6 space-between '>
            <li className='font-medium	'>Home </li>
            <li className='font-medium	'>Features </li>
            <li className='font-medium	'>About us </li>
            <li className='font-medium	'>Contact us </li>
          </ul>
        </div>
         
        
        <div className='flex items-center gap-4'>
          <BsFillLockFill className='text-white'/>
          {/* <h4 className='text-white font-bold'>Login</h4> */}
        </div>
      </div>
      </div>
    </>
  );
};
const Mainscreen = () => {
  return (
    <>
      <div className=' lg:container lg:py-4 lg:px-6 lg:flex lg:items-center lg:justify-between   '>
        <div className='lg:flex lg:items-center lg:gap-4'>
          <div className='lg:w-16 lg:h-10'>
            <img src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
             alt=""
             className='w-full h-full rounded-xl' />
          </div>
          <h1 className='lg:text-2xl lg:font-extrabold'>PARK CAPSULE</h1>
        </div>
        <div >
        <ul className=' lg:container  lg:flex lg:items-center lg:gap-20  '>
            <li className='font-medium	'>Home </li>
            <li className='font-medium	'>Features </li>
            <li className='font-medium	'>About us </li>
            <li className='font-medium	'>Contact us </li>
          </ul>
        </div>
         
        
        <div className='lg:flex lg:items-center lg:gap-4'>
          <BsFillLockFill className='text-white'/>
          <h4 className='text-white font-bold'>Login</h4>
        </div>
      </div>

    </>
  );
};
const Navbar = () => {
  return (
    <>
      <nav className='bg-navbarbg-900' >

        <div className='hidden lg:flex'>
          <Mainscreen />
        </div>
        <div className=' lg:hidden md:block'>
          <Mobile />
        </div>
      </nav>
    </>
  )
}

export default Navbar;