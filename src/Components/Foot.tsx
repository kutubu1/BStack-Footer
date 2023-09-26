
import React from 'react';
import Boder from '../assets/vertical-line.png';
import Bg from '../assets/bg-4.png';
import Logo from '../assets/Logo.png';
import ButtomLine from '../assets/vertical-line-two.png'

const Foot = () => {
  return (
    <div className='foot-container w-full h-auto bg-black py-2'>
    <div><img src={Boder} alt='border'/></div>
    <div className=' h-auto w-2/3 bg-inherit mx-auto my-auto p-5 '>
      <div className='w-full flex justify-between'>
        <div className="logo w-2/3 my-auto"><img src={Logo} alt="Logo" /></div>
        <div className='w-auto text-white font-bold inline-flex flex-wrap' >
          <li className='list-none mx-auto mb-20 w-1/2'><a href="" className='list-link'>DISCORD</a></li>
          <li className='list-none mx-auto w-1/2 mb-20'><a href="" className='list-link'>GITHUB</a></li>
          <li className='list-none mx-auto w-1/2'><a href="" className='list-link'>TWITTER</a></li>
          <li className='list-none mx-auto w-1/2'><a href="" className='list-link'>NOTION</a></li>
        </div>
      </div>
      <div className='text-white font-bold flex justify-center mt-5 mb-3'>
          <li className='list-none mx-4'><a href="" className='list-link'>MIRROR</a></li>
          <button className='mx-4 bg-white w-1 h-5 mt-1'></button>
          <li className='list-none mx-4'><a href="" className='list-link'>ABOUT</a></li>
        </div>
      <div className='my-3'><img src={ButtomLine} alt="Line" className='my-auto'/></div>
      <div className='copyright text-white text-center '>Copyright 2023</div>


    </div>


  </div>
  )
}

export default Foot
