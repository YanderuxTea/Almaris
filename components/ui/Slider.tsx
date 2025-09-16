'use client'
import {images} from '@/public/data/ImagesForSlider'
import {useEffect, useRef} from 'react'
import Image from 'next/image'
import SwiperTimerFunction from '@/public/features/functions/SwiperTimerFunction'
import VariablesForSwiper from '@/public/features/functions/VariablesForSwiper'
import {clearInterval} from 'node:timers'

export default function Slider() {
  const divRef = useRef<(HTMLDivElement | null)[]>([null])
  const {
    intervalRef,
    setCooldownTime,
    currentSlide,
    setFirstRender,
    firstRender
  } = VariablesForSwiper()
  useEffect(() => {
    SwiperTimerFunction(intervalRef, setCooldownTime, currentSlide, setFirstRender, 3000, images)
    const id = intervalRef.current
    return () => {
      if (id) clearInterval(id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <section className='relative min-h-screen overflow-hidden'>
      {images.map((image, i) => {
        return (
          <div
            className={`absolute overflow-hidden z-1 w-full h-full ${currentSlide.current === i ? firstRender ? 'animate-none z-2' : 'animate-swiperTimerCurrentSlide z-2' : firstRender ? 'animate-none z-1' : 'animate-swiperTimerNextSlide z-1'}`}
            key={i} ref={(el) => {
            divRef.current[i] = el
          }}>
            <Image src={image} alt='image for slider' className='object-cover object-left brightness-75 w-full h-full'
                   priority
                   draggable={false}/>
          </div>)
      })}
    </section>
  )
}