import { AnimatePresence, motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const MobileMenu = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [navColor, setNavColor] = useState('');
    const scrollPos = useRef(0);
    window.addEventListener('scroll', () => {
        scrollPos.current = window.scrollY;
        if (window.scrollY <= 0) setNavColor('transparent')
        else setNavColor('black')
    })
    const closeMenu = ()=>{
        setMobileMenu(false); 
        document.body.style.overflow=''

    }

    return (
        <>
            <div className='fixed top-0 w-full h-[7vh] flex py-2 px-4 justify-between items-center z-50 sm:hidden shadow-2xl' style={{backgroundColor: `${navColor}`}}>
                <div className='logo justify-self-start text-[2rem] text-green-400 cursor-pointer'>P</div>
                <div className='text-white' onClick={() => {setMobileMenu(true); document.body.style.overflow='hidden'}}><MenuIcon style={{ fontSize: '30px' }} /></div>
            </div>

            <AnimatePresence>
                {mobileMenu &&
                    <motion.div initial={{y:-1000}} animate={{y:0}} exit={{y:-1000}} transition={{ type: 'spring', stiffness: 200, damping: 17 }} className='w-full h-full bg-black absolute z-[99]' style={{ top: `${scrollPos.current}px` }}>
                        <div className='text-white w-6 mx-[87%] mt-3 absolute' onClick={() =>{setMobileMenu(false); document.body.style.overflow=''}}><CloseIcon style={{ fontSize: '30px' }} /></div>
                        <div className='w-full h-full'>
                            <div className='py-6 h-[25%]'>
                                <div className='flex flex-col items-center justify-center'>
                                    <div className='logo  text-[5rem] text-green-400 cursor-pointer hover:scale-110 transition-all'>P</div>
                                    <p className='mt-[-15px] text-gray-400'>Developer</p>
                                </div>
                            </div>
                            <div className='text-white h-[75%] list-none w-full bg-[#121212] flex flex-col items-center justify-center py-6'>
                                <div className='h-[15%] text-[18px] w-full border-t border-[#292929] flex items-center justify-center'><li className='text-center'><a href='#projects' onClick={closeMenu}>Projects</a></li></div>
                                <div className='h-[15%] text-[18px] w-full border-t border-[#292929] flex items-center justify-center'><li className='text-center'><a href='#about' onClick={closeMenu}>About</a></li></div>
                                <div className='h-[15%] text-[18px] w-full border-t border-[#292929] flex items-center justify-center'><li className='text-center'><a href='#skills' onClick={closeMenu}>Skills</a></li></div>
                                <div className='h-[15%] text-[18px] w-full border-t border-[#292929] border-b flex items-center justify-center'><li className='text-center'><a href='#contact' onClick={closeMenu}>Contact</a></li></div>
                            </div>
                            {/* <div className='text-white h-[15%] bg-[#121212] '>
                                <div>Icons</div>
                                <div>Icons</div>
                                <div>Icons</div>
                            </div> */}
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default MobileMenu