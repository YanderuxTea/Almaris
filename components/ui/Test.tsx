'use client'
import {motion} from 'motion/react'
import React from 'react'

export default function Test() {
  const [isOpacity, setIsOpacity] = React.useState(false)
  return (
    <div className='w-full'>
      <motion.div animate={{opacity: 0}} className='bg-black w-10 h-10'></motion.div>
      <button>test</button>
    </div>
  )
}