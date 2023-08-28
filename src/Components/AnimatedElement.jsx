import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedElement = ({ children }) => {
    const { ref, inView } = useInView();
    const animation = useAnimation();
    useEffect(() => {
        console.log("from AE: ",inView)
        if (inView) {
            animation.start("visible")
        }
        if (!inView) animation.start("hidden")
    }, [inView]);
    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { x: -100, opacity: 0 },
                visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedElement;