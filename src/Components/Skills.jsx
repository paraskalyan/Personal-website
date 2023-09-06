import React, { useEffect } from 'react'
import AnimatedElement from './AnimatedElement'
import { animate, inView, motion, useAnimation } from 'framer-motion';
import './Home.css';
import { useInView } from 'react-intersection-observer';
const Skills = () => {
    const { ref: ref1, inView: inView1 } = useInView();
    const { ref: ref2, inView: inView2 } = useInView();
    const { ref: ref3, inView: inView3 } = useInView();
    const { ref: ref4, inView: inView4 } = useInView();
    const animation = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const animation4 = useAnimation();
    useEffect(() => {
        console.log(inView1, inView2)
        if (inView1) animation.start("visible")
        else animation.start("hidden")
        if (inView2) animation2.start("visible")
        else animation2.start("hidden")
        if (inView3) animation3.start("visible")
        else animation3.start("hidden")
        if (inView4) animation4.start("visible")
        else animation4.start("hidden")
        
    }, [inView1, inView2, inView3, inView4])


    return (
        <div id='skills' className='min-h-fit p-10 bg-inherit max-sm:px-5 max-sm:pb-3 max-sm:pt-[7vh]'>
            <AnimatedElement>
                <div className='text-[4rem] max-sm:text-[2rem]'><span>03 </span><span className='text-green-400 font-semibold'>My Skill Set</span></div>
            </AnimatedElement>
            <div className='w-full flex gap-2 max-sm:flex-col'>
                <div className='flex-1 max-sm:my-4'>
                    <p className='text-justify font-light'>
                        As a Full Stack Web Developer, I have a comprehensive understanding of both front-end and back-end web development. I am proficient in several programming languages and frameworks, including ReactJS, which allows me to take on a wide variety of projects.
                        <br /><br />With my experience in web development, I am able to design, develop, and deploy fully functional web applications that meet my client's needs.
                        <br /><br />Additionally, my experience as an intern and a freelancer has given me valuable experience in project management, communication, and problem-solving, which allows me to work effectively both independently and as part of a team.
                    </p>
                </div>
                <div className='flex-[1.5] flex flex-col justify-evenly p-5 max-sm:p-0 max-sm:gap-6 max-sm:my-5 max-sm:text-[18px]'>
                    <div>
                        <p>Front-end</p>
                        <div className='level-bar bg-red-500 w-[80%] h-[3px] bg-opacity-20 relative max-sm:w-full max-sm:my-1'>
                            <motion.div ref={ref1} variants={{ hidden: { width: 0 }, visible: { width: '85%' } }} initial="hidden" animate={animation} transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: '60' }} className='absolute bg-red-500 h-full left-0'>
                            </motion.div>
                        </div>
                    </div>
                    <div>
                        <p>Back-end</p>
                        <div className='max-sm:my-1 level-bar max-sm:w-full bg-green-500 w-[80%] h-[3px] bg-opacity-20 relative'>
                            <motion.div
                                ref={ref2}
                                variants={{ hidden: { width: 0 }, visible: { width: '75%' } }}
                                initial="hidden"
                                animate={animation2}
                                transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: '60' }}
                                className='absolute bg-green-500 w-4 h-full left-0 bg-opacity-100'>
                            </motion.div>
                        </div>
                    </div>
                    <div>
                        <p>ReactJs</p>
                        <div className=' max-sm:my-1 level-bar max-sm:w-full bg-blue-500 w-[80%] h-[3px] bg-opacity-20 relative'>
                            <motion.div
                                ref={ref3}
                                variants={{ hidden: { width: 0 }, visible: { width: '90%' } }}
                                initial="hidden"
                                animate={animation3}
                                transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: '60' }}
                                className='absolute bg-blue-500 w-4 h-full left-0 bg-opacity-100'>
                            </motion.div>
                        </div>
                    </div>
                    <div>
                        <p>MongoDB</p>
                        <div className='max-sm:my-1 level-bar max-sm:w-full bg-pink-500 w-[80%] h-[3px] bg-opacity-20 relative'>
                            <motion.div
                                ref={ref4}
                                variants={{ hidden: { width: 0 }, visible: { width: '85%' } }}
                                initial="hidden"
                                animate={animation4}
                                transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: '60' }}
                                className='absolute bg-pink-500 w-4 h-full left-0 bg-opacity-100'>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
