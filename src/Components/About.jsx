import React, { useEffect } from 'react'
import AnimatedElement from './AnimatedElement'

const About = () => {

    return (
        <div className='min-h-full bg-inherit relative overflow-hidden z-20'>
            <div className='text-[50vh] absolute text-[#2b2b2b] ml-[30%] -z-10 select-none'>ABOUT</div>
            <AnimatedElement>
                <div className='text-[4rem] ml-10'><span>02 </span><span className='text-green-400 font-semibold'>About me</span></div>
            </AnimatedElement>
        </div>
    )
}

export default About;