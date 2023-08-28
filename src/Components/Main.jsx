import React from 'react'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'

const Main = () => {
  return (
    <div className='w-[90%] ml-[10%] bg-[#1c1c1c] text-white min-h-full'>
        <Home/>
        <Projects/>
        <About/>
        <Skills/>
        <Contact/>
    </div>
  )
}

export default Main