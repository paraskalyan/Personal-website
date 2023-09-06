import React, { useEffect, useRef } from 'react';
import { motion, inView, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import weatherPhoto from '../images/weather.png';
import ecommerece from '../images/ecommerce.png'
import Project from './Project';
const Projects = () => {
  const projects = [
    {
    name : 'Weather App',
    img: weatherPhoto
    },
    {
      name: 'Personal Website',
      img: 'ff'
    },
    {
      name: 'Blog App',
      img: 'd'
    },
    {
      name: 'Ecommerce Frontend',
      img: ecommerece
    },
    {
      name: 'Sign Language Detection',
      img: 'd'
    }

  ]
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(()=>{
    console.log("In view: ", inView)
    if(inView) animation.start("visible")
    if(!inView) animation.start("hidden")
  },[inView]);

  return (
    <div id='projects' className='min-h-fit bg-inherit relative overflow-hidden  border-t-2 border-[#292929] p-10 max-sm:px-5 max-sm:pt-[7vh]'>
      <div className='text-[50vh]  absolute text-[#2b2b2b] ml-[30%] -z-10 select-none'>PROJECTS</div>
      <div className='flex flex-col'>
        <motion.div
          ref={ref}
          variants={{
            hidden: { y: 50, opacity: 0 },
      
            visible: { opacity: 1, y: 0 }
          }}
          initial= "hidden"
          animate={animation}
          transition={{duration: 0.5, delay: 0.20}}
          className='project-text text-[4rem] max-sm:text-[2rem]'>
          01 <span className='text-green-400 font-semibold'>My Projects</span>
        </motion.div>
        <div className='text-yellow-400'>This section is not fully designed</div>
        <div className='my-6'>
          {projects.map((item, key)=>{
            return(
                <Project key={key} item={item}/>
            )
          })} 
        </div>
      </div>
    </div>
  )
}

export default Projects;
