import React, {RefObject} from 'react'
import {StaticImageData} from 'next/image'

interface Props {
  currentSide: RefObject<number>
  intervalRef: RefObject<NodeJS.Timeout | null>
  currentIndexSlide: RefObject<number>
  setCooldownTime: React.Dispatch<React.SetStateAction<number>>
  setFirstRender: React.Dispatch<React.SetStateAction<boolean>>
  delay: number
  imgArr: Array<StaticImageData>
}

export default function SliderByTimer({
                                        currentSide,
                                        intervalRef,
                                        currentIndexSlide,
                                        setFirstRender,
                                        setCooldownTime,
                                        delay,
                                        imgArr
                                      }: Props) {
  if (intervalRef.current) clearInterval(intervalRef.current)

  intervalRef.current = setInterval(() => {
    setFirstRender(false)
    currentSide.current = 1
    currentIndexSlide.current = (currentIndexSlide.current + 1) % imgArr.length
    setCooldownTime(Date.now())
  }, delay)
}