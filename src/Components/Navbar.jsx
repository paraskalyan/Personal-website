import React, { useEffect, useRef, useState } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Home.css'
import { AnimatePresence, motion } from 'framer-motion';
import MobileMenu from './MobileMenu';
const Navbar = () => {
  const iconStyle = 'hover:scale-125 hover:text-green-400 cursor-pointer transform transition duration-800';
  const listStyle = 'cursor-pointer hover:text-green-300 text-center';
  return (
    <>
      <div className='w-[10%] h-[100vh] bg-[#171717] text-white flex flex-col items-center justify-between py-9 fixed max-sm:hidden'>
        <div className='flex flex-col  w-full items-center'>
          <div className='logo justify-self-start text-[4rem] text-green-400 cursor-pointer hover:scale-110 transition-all'>P</div>
          <p className='mt-[-15px] text-gray-400'>Developer</p>
        </div>
        <div className='list-none flex flex-col gap-5 w-full text-gray-200'>
          <hr className='border-[#404040]' />
          <li className={listStyle}><a href='#projects'>Projects</a></li><hr className='border-[#404040]' />
          <li className={listStyle}><a href='#about'>About</a></li><hr className='border-[#404040]' />
          <li className={listStyle}><a href='#skills'>My Skills</a></li><hr className='border-[#404040]' />
          <li className={listStyle}><a href='#contact'>Contact</a></li><hr className='border-[#404040]' />
        </div>
        <div className='flex gap-3 text-gray-200'>
          <div className={iconStyle}><a href='https://www.twitter.com/paras_eth'><TwitterIcon /></a></div>
          <div className={iconStyle}><a href='https://www.github.com/paraskalyan'><GitHubIcon /></a></div>
          <div className={iconStyle}><a href='https://www.linkedin.com/in/paras-kalyan-630017191'><LinkedInIcon /></a></div>
        </div>
      </div>



      {/* {mobileMenu && <MobileMenu /> */}

    </>
  )
}

export default Navbar
