import React, { useEffect } from 'react'
import AnimatedElement from './AnimatedElement'
import './Home.css';
import { motion } from 'framer-motion';
const About = () => {
    const skills = ['React', 'Node', 'Python', 'JavaScript', 'Tailwind', 'Express', 'MongoDB', 'MySQL', 'C++']

    return (
        <div id='about' className='min-h-fit p-10 bg-inherit relative overflow-hidden z-20 max-sm:px-5 py-7 max-sm:pb-3 max-sm:pt-[7vh]'>
            <div className='text-[50vh] max-sm:text-[15vh] absolute text-[#2b2b2b] ml-[30%] -z-10 select-none'>ABOUT</div>
            <AnimatedElement>
                <div className='text-[4rem] max-sm:text-[2rem]'><span>02 </span><span className='text-green-400 font-semibold'>About me</span></div>
            </AnimatedElement>

            <div className='flex gap-6 max-sm:flex-col '>

                <div className='w-[50%] max-sm:w-full text-justify max-sm:my-6'>
                    <AnimatedElement>

                        Hello Stranger, I am Paras Kalyan, a Full Stack Web Developer based in Ludhiana. With a passion for coding, I began my journey in 2017 and have since gained experience as an intern and by doing personal projects. <br /><br />

                        I'm a 2023 B.Tech graduate in Computer Science, I am constantly looking for new opportunities to expand my skill set and take on exciting projects. <br /><br />

                        With a strong foundation in web development and expertise in multiple programming languages and frameworks, I am equipped to tackle complex problems and deliver top-quality solutions.
                    </AnimatedElement>
                </div>

                <div className='w-[50%] flex flex-wrap gap-3 p-3  max-sm:w-full  max-sm:gap-3'>
                   
                        {skills.map((item, index) => {
                            return (
                                <motion.div
                                    whileTap={{ scale: 1.1 }}
                                    key={index}
                                    className='bg-black text-[1.2rem] my-2 sm:py-4 sm:px-7 flex justify-center items-center max-sm:w-full max-sm:h-[50px] bg-opacity-70 text-green-400'>
                                    {item}
                                </motion.div>)
                        })}
                        {/* <motion.div whileHover={{ x: 100, y: 100 }} className='a1 bg-black h-[90px] rounded-full w-[90px] flex items-center justify-center bg-opacity-70'>Python</motion.div>
                    <motion.div whileHover={{ x: 100, y: 100 }} className='a2 bg-black h-[90px] rounded-full w-[90px] flex items-center justify-center bg-opacity-70'>Node</motion.div>
                <motion.div whileHover={{ x: 100, y: 100 }} className='a3 bg-black h-[90px] rounded-full w-[90px] flex items-center justify-center bg-opacity-70'>React</motion.div> */}
                    
                </div>
            </div>
        </div>
    )
}

export default About;
