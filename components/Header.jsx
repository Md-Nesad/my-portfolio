'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import profilePicture from '@/public/Profile_picture.png'
import { textContainer, textItem, TEXTS } from '@/data/animation'
import Link from 'next/link'
import Share from './share'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Header() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length)
    }, 100)
    //clear interval
    return () => clearInterval(intervalId)
  }, [])

  return (
    <header className='h-[60vh] md:h-[80vh] mt-20 md:p-20 py-10 sm:pl-5 dark:bg-black max-md:pb-16'>
      <div className='sm:flex sm:justify-between sm:items-center mx-auto'>
        <div className='sm:w-[400px] max-sm:w-[440px] max-sm:mx-auto max-sm:text-center ml-20'>
          <motion.div
            variants={textContainer}
            initial='hidden'
            animate='show'
            className='space-y-4'
          >
            <motion.h1
              variants={textItem}
              className='sm:text-xl md:text-3xl font-bold'
            >
              {TEXTS[index]}
            </motion.h1>
            <motion.h1
              variants={textItem}
              className='sm:text-xl md:text-3xl font-bold'
            >
              This is Md. Nesad.
            </motion.h1>
            <motion.p variants={textItem} className='pb-5'>
              I am a skilled and professional <br /> Front End Developer with
              basic of backend.
            </motion.p>
          </motion.div>

          <div className='space-x-4 pb-10 md:flex sm:space-y-2 md:space-y-0'>
            <Link href={'/contact'}>
              <Button className='bg-[#F59E18] rounded-full md:text-lg hover:bg-[#127A88] transition dark:text-white hover:scale-105'>
                Contact me
              </Button>
            </Link>
            <Link href={'/resume'}>
              <Button className='bg-[#F59E18] rounded-full md:text-lg hover:bg-[#127A88] transition dark:text-white hover:scale-105'>
                Visit my CV
              </Button>
            </Link>
          </div>
          <Share />
        </div>

        <div className='hidden sm:block md:dark:ring-1 md:dark:ring-[#ffd18d] rounded-md sm:w-[600px] max-sm:w-0'>
          <Image
            src={profilePicture}
            alt='Profile picture of Md. Nesad'
            width={400}
            height={250}
            priority={true}
            className='bg-black rounded-full mx-auto ring-2 ring-[#ffd18d]'
          />
        </div>
      </div>
    </header>
  )
}
