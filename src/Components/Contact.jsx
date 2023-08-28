import React from 'react'
import AnimatedElement from './AnimatedElement';
import { motion } from 'framer-motion'
import './Home.css';
const Contact = () => {
    return (
        <div className='min-h-full bg-inherit'>
            <div className='w-[50%] p-10 flex flex-col gap-9'>
                <AnimatedElement>
                    <div className='text-[4rem]'><span>04 </span><span className='text-green-400 font-semibold'>Contact me</span></div>
                </AnimatedElement>
                <p>I'm interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to use the form.</p>
                <form className='flex gap-4 flex-wrap'>
                    <input className='focus:boder-b focus:border-b-white outline-none bg-gray-800 p-3 w-[48%]' placeholder='Name' type="text" />
                    <input className='focus:boder-b focus:border-b-white outline-none bg-gray-800 p-3 w-[48%]' placeholder='Email' type="email" />
                    <input className='focus:boder-b focus:border-b-white outline-none bg-gray-800 p-3 w-full' placeholder='Subject' type="text" />
                    <textarea whileFocus={{borderBottom: '1px solid white'}} className='outline-none bg-gray-800 p-3 w-full resize-none' rows='7' placeholder='Message' type="text" />
                    <button className='btn text-black px-6 py-3'>Send Message!</button>
                </form>
            </div>
        </div>
    )
}

export default Contact