import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Navbar = () => {
  const iconStyle = 'hover:scale-125 hover:text-green-400 cursor-pointer transform transition duration-800';
  const listStyle = 'cursor-pointer hover:text-green-300 text-center';
  return (
    <div className='w-[10%] h-[100vh] bg-[#171717] text-white flex flex-col items-center justify-between py-9 fixed'>
      <div className='justify-self-start'>LOGO</div>
      <div className='list-none flex flex-col gap-5 w-full text-gray-200'>
        <hr className='border-[#404040]'/>
        <li className={listStyle}><a>Projects</a></li><hr className='border-[#404040]'/>
        <li className={listStyle}><a>About</a></li><hr className='border-[#404040]'/>
        <li className={listStyle}><a>Work</a></li><hr className='border-[#404040]'/>
        <li className={listStyle}><a>My Skills</a></li><hr className='border-[#404040]'/>
        <li className={listStyle}><a>Contact</a></li><hr className='border-[#404040]'/>
      </div>
      <div className='flex gap-3 text-gray-200'>
        <div className={iconStyle}><TwitterIcon/></div>
        <div className={iconStyle}><GitHubIcon/></div>
        <div className={iconStyle}><LinkedInIcon/></div>
      </div>
    </div>
  )
}

export default Navbar