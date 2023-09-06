import React from 'react'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
const Main = () => {
  return (
    <div className='w-[90%] ml-[10%] bg-[#1c1c1c] text-white min-h-full max-sm:w-full max-sm:ml-0'>
        <MobileMenu/>
        <Home/>
        <Projects/>
        <About/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Main
