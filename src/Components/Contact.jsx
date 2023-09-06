import React, { useRef, useState } from 'react'
import AnimatedElement from './AnimatedElement';
import { AnimatePresence, motion } from 'framer-motion';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import './Home.css';
import emailjs from '@emailjs/browser'
const Contact = () => {
    const [showMessage, setShowMessage] = useState({success: false, error: false});
    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formRef.current.name.value == '' || formRef.current.message.value == '' || formRef.current.email.value == '' || formRef.current.subject.value == '') {
            setShowMessage((prev)=>({...prev, error: true}));
            setTimeout(() => {
                setShowMessage((prev)=>({...prev, error: false}));
            }, 4000)
        }
        else {
            emailjs.sendForm('paras-react', 'template_bcrn68c', formRef.current, '24q7jr30Czt5DDhcO')
                .then((result) => {
                    console.log(result.text);
                    if (result.text == 'OK') setShowMessage({success: true})
                }, (error) => {
                    console.log(error.text);
                });
        }
    }
    return (
        <div id='contact' className='min-h-fit p-10 relative bg-inherit max-sm:px-5 max-sm:pb-7 max-sm:pt-[7vh]'>

            <div className='w-[50%] flex flex-col gap-5 max-sm:w-full'>
                <AnimatedElement>
                    <div className='text-[4rem] max-sm:text-[2rem]'><span>04 </span><span className='text-green-400 font-semibold'>Contact me</span></div>
                </AnimatedElement>

                <div className=''>
                    <p className='text-justify'>I'm interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to use the form.</p>
                    <form ref={formRef} onSubmit={handleSubmit} className='flex gap-4 flex-wrap my-5'>
                        <input name='name' className='focus:boder-b focus:border-b-white outline-none bg-[#292929] p-3 w-[48%] max-sm:w-full' placeholder='Name' type="text" />
                        <input name='email' className='focus:boder-b focus:border-b-white outline-none bg-[#292929] p-3 w-[48%] max-sm:w-full' placeholder='Email' type="email" />
                        <input name='subject' className='focus:boder-b focus:border-b-white outline-none bg-[#292929] p-3 w-full' placeholder='Subject' type="text" />
                        <textarea name='message' whileFocus={{ borderBottom: '1px solid white' }} className='outline-none bg-[#292929] p-3 w-full resize-none' rows='7' placeholder='Message' type="text" />
                        <button className='btn self-start border border-green-400 text-green-400 px-6 py-3 w-[40%] max-sm:w-full'>Send Message!</button>
                    </form>
                </div>
                {<AnimatePresence>
                    {showMessage.error &&
                        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0, y: -50 }} className='bg-red-500 w-fit px-3 py-1 rounded-lg mx-auto mt-[-30px] flex items-center justify-center gap-2'><WarningAmberIcon style={{ fontSize: '17px' }} /> Fill out all the values</motion.div>}
                </AnimatePresence>
                }
                 {<AnimatePresence>
                    {showMessage.success &&
                        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0, y: -50 }} className='bg-green-900 w-fit px-3 py-1 rounded-lg mx-auto mt-[-30px] flex items-center justify-center gap-2'>Message sent!</motion.div>}
                </AnimatePresence>
                }
            </div>
        </div>
    )
}

export default Contact
