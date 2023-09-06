import './Home.css';
import { motion } from 'framer-motion';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
  const hi = ['H', 'i', ',']
  const name = ['I', "'", 'm', ' ', 'P', 'a', 'r', 'a', 's']
  const front = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
  const iconStyle = 'hover:scale-125 hover:text-green-400 cursor-pointer transform transition duration-800';

  return (
    <div className='h-[100vh] flex flex-col items-start justify-center z-[-4] max-sm:w-[100%] '>
      <div className='absolute left-[50%] flex flex-wrap w-[45%] gap-[130px] max-sm:hidden'>
        {[...Array(9)].map((_, index) => {
          return (<motion.div initial={{ scale: 1 }} animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity }} className='h-[100px] w-[100px] bg-[#292929] rounded-full max-sm:h-[50px] max-sm:w-[50px] '></motion.div>)
        })}
      </div>
      <motion.div className=' flex flex-col p-10 text-left gap-8 z-10 max-sm:px-5'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <div className='flex flex-col sliding-text text-[4rem] font-bold leading-[70px] max-sm:text-[3.5rem]'>
          <div className='flex' >
            {hi.map((char) => {
              return (<motion.h1 whileHover={{ skew: 10, scale: 1.2, color: '#3efa9c' }}>{char}</motion.h1>)
            })}
          </div>
          <div className='flex'>
            {name.map((char) => {
              return (
                char == ' ' ? <motion.h1>&nbsp;</motion.h1> :
                  <motion.h1 whileHover={{ skew: 10, scale: 1.2, color: '#3efa9c' }} >{char}</motion.h1>)
            })}
          </div>
          <div>
            {front.map((char) => {
              return (
                <motion.span whileHover={{ skew: 10, scale: 1.2, color: '#3efa9c' }}>{char}</motion.span>)
            })}
          </div>

        </div>
        <motion.div className='text-xl text-gray-500 max-sm:text-lg'>Full Stack Web Developer</motion.div>
        <div className='flex gap-3 text-gray-200'>
          <div className={iconStyle}><a href='https://www.twitter.com/paras_eth'><TwitterIcon style={{ fontSize: '35px' }} /></a></div>
          <div className={iconStyle}><a href='https://www.github.com/paraskalyan'><GitHubIcon style={{ fontSize: '35px' }} /></a></div>
          <div className={iconStyle}><a href='https://www.linkedin.com/in/paras-kalyan-630017191'><LinkedInIcon style={{ fontSize: '35px' }} /></a></div>
        </div>
        <motion.button onClick={()=>window.location='#contact'} className='btn self-start border text-[1.2rem] border-green-400 text-green-400 py-2 px-9 max-sm:w-full max-sm:h-[70px]'>Contact me</motion.button>
      </motion.div>
            
      {/* <div className='h-[100%] w-[40%] z-[0] absolute right-0'>
          <Canvas>
            <OrbitControls enableZoom={false}/>
            <directionalLight position={[5, 2, 1]} />
            <ambientLight intensity={3}/> 
            <ParasModel scale={2.5} position={[0,-2,0]}/>
          </Canvas>
      </div> */}
    </div>
  )
}

export default Home
