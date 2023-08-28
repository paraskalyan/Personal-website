import React, { useEffect, useRef } from 'react';
import { motion, inView, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Projects = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(()=>{
    console.log("In view: ", inView)
    if(inView){
      animation.start("visible")
    }
    if(!inView) animation.start("hidden")
  },[inView]);

  return (
    <div className='min-h-full bg-inherit relative overflow-hidden z-20'>
      <div className='text-[50vh] absolute text-[#2b2b2b] ml-[30%] -z-10 select-none'>PROJECTS</div>
      <div className='flex'>
        <motion.div
          ref={ref}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { opacity: 1, y: 0 }
          }}
          initial= "hidden"
          animate={animation}
          transition={{duration: 0.5, delay: 0.20}}
          className='project-text text-[4rem] ml-10 mt-[30px]'>
          01 <span className='text-green-400 font-semibold'>My Projects</span>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects;