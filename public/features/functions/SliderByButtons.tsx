import React, {RefObject} from 'react'
import {StaticImageData} from 'next/image'
import SliderByTimer from '@/public/features/functions/SliderByTimer'

interface Props {
  currentSide: RefObject<number>
  intervalRef: RefObject<NodeJS.Timeout | null>
  buttonSide: string;
  imgArr: Array<StaticImageData>
  currentIndexSlide: RefObject<number>
  setFirstRender: React.Dispatch<React.SetStateAction<boolean>>
  setCooldownTime: React.Dispatch<React.SetStateAction<number>>
  cooldownTime: number
}

export default function SliderByButtons({
                                          currentSide,
                                          intervalRef,
                                          buttonSide,
                                          imgArr,
                                          currentIndexSlide,
                                          setFirstRender,
                                          setCooldownTime,
                                          cooldownTime
                                        }: Props) {
  if (Date.now() - cooldownTime < 1500) return
  if (intervalRef.current) clearInterval(intervalRef.current)
  setFirstRender(false)
  currentSide.current = buttonSide === 'left' ? -1 : 1
  currentIndexSlide.current = (currentIndexSlide.current + 1) % imgArr.length
  setCooldownTime(Date.now())
  setTimeout(() => {
    SliderByTimer({
      currentIndexSlide: currentIndexSlide,
      currentSide: currentSide,
      imgArr: imgArr,
      setCooldownTime: setCooldownTime,
      intervalRef: intervalRef,
      setFirstRender: setFirstRender,
      delay: 3000
    })
  }, 1500)
}