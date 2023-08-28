import React from 'react'
import './Home.css';
import { motion } from 'framer-motion';
const Home = () => {
  const hi = ['H', 'i', ',']
  const name = ['I', "'", 'm', ' ', 'P', 'a', 'r', 'a', 's']
  const front = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  return (
    <div className='h-[100vh] flex flex-col items-start justify-center '>
      <motion.div className='flex flex-col mx-10 text-left gap-8'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className='flex flex-col sliding-text text-[5rem] font-bold leading-[80px]'>
          <div className='flex' > 
            {hi.map((char) => {
              return (<motion.h1 whileHover={{ skew: 8,color: '#3efa9c' }}>{char}</motion.h1>)
            })}
          </div>
          <div className='flex'>
            {name.map((char) => {
              return (
                char == ' ' ? <motion.h1>&nbsp;</motion.h1> :
                  <motion.h1 whileHover={{ skew: 8, scale: 1.1, color: '#3efa9c'}} >{char}</motion.h1>)
            })}
          </div>
          <div className='flex'>
            {front.map((char) => {
              return (
                char == ' ' ? <motion.h1>&nbsp;</motion.h1> :
                  <motion.h1 whileHover={{ skew: 8, color: '#3efa9c' }}>{char}</motion.h1>)
            })}
          </div>

        </div>
        <motion.div className='text-xl text-gray-500'>Full Stack Web Developer</motion.div>
        <motion.button className='self-start border border-green-400 py-2 px-9 text-green-400 text-lg hover:bg-green-400 hover:text-black transition-all'>Contact me</motion.button>
      </motion.div>
    </div>
  )
}

export default Home