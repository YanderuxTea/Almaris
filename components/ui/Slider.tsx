'use client'
import {images} from '@/public/data/ImagesForSlider'
import Image from 'next/image'
import React, {useEffect, useRef} from 'react'
import SliderByTimer from '@/public/features/functions/SliderByTimer'
import {clearInterval} from 'node:timers'
import Arrow from '@/public/svg/Arrow'
import SliderByButtons from '@/public/features/functions/SliderByButtons'

export default function Slider() {
  const currentSide = React.useRef<number>(1)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const currentIndexSlide = useRef<number>(0)
  const [cooldownTime, setCooldownTime] = React.useState<number>(0)
  const [firstRender, setFirstRender] = React.useState<boolean>(true)
  useEffect(() => {
    SliderByTimer({
      currentSide: currentSide,
      intervalRef: intervalRef,
      currentIndexSlide: currentIndexSlide,
      setFirstRender: setFirstRender,
      setCooldownTime: setCooldownTime,
      delay: 3000,
      imgArr: images
    })
    const intRef = intervalRef.current
    return () => {
      if (intRef) clearInterval(intRef)
    }
  }, [])
  return (
    <section className='min-h-screen relative flex flex-row items-center overflow-clip justify-between'>
      <button className='z-3 rotate-90 cursor-pointer scale-175 px-2.5' onClick={() => SliderByButtons({
        currentSide: currentSide,
        intervalRef: intervalRef,
        buttonSide: 'left',
        imgArr: images,
        currentIndexSlide: currentIndexSlide,
        setFirstRender: setFirstRender,
        setCooldownTime: setCooldownTime,
        cooldownTime: cooldownTime
      })}><Arrow color='AB8965'/></button>
      <button className='z-3 -rotate-90 cursor-pointer scale-175 px-2.5' onClick={() => SliderByButtons({
        currentSide: currentSide,
        intervalRef: intervalRef,
        buttonSide: 'right',
        imgArr: images,
        currentIndexSlide: currentIndexSlide,
        setFirstRender: setFirstRender,
        setCooldownTime: setCooldownTime,
        cooldownTime: cooldownTime
      })}><Arrow color='AB8965'/></button>
      {images.map((image, i) => {
        return <div
          className={`absolute w-full h-full ${i === currentIndexSlide.current ? firstRender ? 'animate-none z-2' : 'animate-swiperTimerCurrentSlide z-2' : firstRender ? 'animate-none z-1' : 'animate-swiperTimerNextSlide z-1'}`}
          key={i}
          style={{'--currentSide': currentSide.current} as React.CSSProperties}>
          <Image src={image} alt='image for slider' priority draggable={false}
                 className='w-full h-full object-cover object-left'/>
        </div>
      })}
    </section>
  )
}