import React from 'react'
import { motion } from 'framer-motion'
//
import Button from '@components/Button'
import { fadeUpSpring } from '@config/motion'
import AnimatedTextWord from '@components/motion/AnimatedTextWord'
import AnimatedTextCharacter from '@components/motion/AnimatedTextCherecter'


const Left = () => {
  return (
    <div  className='relative col-span-2 z-10 md:text-center lg:text-left !mt-[-20px] ' >

        <img alt="" src="/images/glassify/blur-cyan-0.png" width="530" height="530" decoding="async" data-nimg="1" className="absolute bottom-full right-full -mr-72 -mb-56 opacity-50" />

        <div className='relative' >
            <AnimatedTextWord 
               text="Hi, my name is"
               className='text-lg justify-center lg:justify-start'
            />
            
            <div>
               <AnimatedTextCharacter 
                  className='!font-medium !bg-clip-text !text-[2rem] !leading-normal md:!text-7xl md:!leading-[87px] !text-slate-100 justify-center lg:justify-start' 
                  text="Murilo Goncalves Castro." 
               />
               <AnimatedTextCharacter 
                  className='font-medium text-sm sm:text-[1.6rem] tracking-normal md:text-[2rem] text-slate-400 mt-1 justify-center lg:justify-start' 
                  text="Who Transform Ideas into Web Wonders" 
               />
            </div>

            <div className='my-5 md:my-8 leading-7 text-slate-200 md:text-lg max-w-3xl' >
               <AnimatedTextWord 
                  text="advanced, senior and motivated Full-stack web developer with rich experiences in building responsible and mobile friendly websites, creating web applications from ground up"
                  className='text-sm sm:text-lg justify-center lg:justify-start'
               />
            </div>
        </div>

        <motion.div variants={fadeUpSpring}  initial="hidden" animate="visible" className='w-fit mx-auto lg:ml-0' >
           <a href='#works' ><Button outlined > Check out my projects </Button></a>
        </motion.div>
    
    </div>
  )
}

export default Left
