import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    const iconStyle = 'hover:scale-125 hover:text-green-400 cursor-pointer transform transition duration-800';

    return (
        <div className='bg-black h-auto p-3 flex items-center justify-center flex-col'>
            <div>To the Moon, Mars and beyond</div>
            <div className='flex items-center justify-center gap-6'>
                <div className='logo justify-self-start text-[3rem] text-green-400 cursor-pointer hover:scale-110 transition-all'>P</div>
                <div className='flex gap-3 text-gray-200'>
                    <div className={iconStyle}><a href='https://www.twitter.com/paras_eth'><TwitterIcon /></a></div>
                    <div className={iconStyle}><a href='https://www.github.com/paraskalyan'><GitHubIcon /></a></div>
                    <div className={iconStyle}><a href='https://www.linkedin.com/in/paras-kalyan-630017191'><LinkedInIcon /></a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer