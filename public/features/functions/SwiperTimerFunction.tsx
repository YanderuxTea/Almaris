import React, {RefObject} from 'react'
import {clearInterval} from 'node:timers'
import {StaticImageData} from 'next/image'

export default function SwiperTimerFunction(intervalRef: RefObject<NodeJS.Timeout | null>,
                                            setCooldownTime: React.Dispatch<React.SetStateAction<number>>,
                                            currentSlide: RefObject<number>,
                                            setFirstRender: React.Dispatch<React.SetStateAction<boolean>>,
                                            delay: number,
                                            imgArr: Array<StaticImageData>) {
  if (intervalRef.current) clearInterval(intervalRef.current)
  intervalRef.current = setInterval(() => {
    setFirstRender(false)
    setCooldownTime(Date.now())
    currentSlide.current = (currentSlide.current + 1) % imgArr.length
  }, delay)
}