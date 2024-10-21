import React from 'react'
import { motion } from 'framer-motion'
import { IoMdArrowDropright } from 'react-icons/io'
//
import { skills } from '@modules/Home/config/constanst'
import { fadeTop, motionStep } from '@config/motion'


const Left = () => {

  // content
  const content = [
    "Hello! I'm Murilo Goncalves Castro, a passionate web developer who loves developing , and I'm on the lookout for front-end, back-end, or full-stack development opportunities. I'm ambitious, resolute, dedicated, and enthusiastic. My technical skills span a wide range of technologies, making me a dynamic and dedicated web developer with a strong commitment to learning, teaching, and delivering high-quality web solutions."
  ]

  return (
    <motion.div variants={fadeTop} {...motionStep} className='col-span-3' >

      <div className='space-y-4 mt-7 text-slate-400' >

        {content.map((e:string, i:number) => <p key={i} > {e} </p>)}

        <div className='__skills md:pr-56' >
           <ul className='grid grid-cols-2 space-y-2' >
              {skills.map((e: string, i: number) => (
                <li key={i} className='gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-green-500' > <IoMdArrowDropright className='text-green-500 text-xl' /> {e}</li> 
              ))}             
           </ul> 
        </div>

      </div>

    </motion.div>
  )
}

export default Left
