import React, {RefObject, useRef, useState} from 'react'
import {images} from '@/public/data/ImagesForSlider'

interface Props {
  divRef: RefObject<(HTMLDivElement | null)[]>
}

export default function SlidersFunctions({divRef}: Props) {
  const currentSide = React.useRef<number>(1)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)
  const currentIndexSlide = React.useRef<number>(0)
  const [cooldownTime, setCooldownTime] = React.useState<number>(0)
  const [firstRender, setFirstRender] = React.useState<boolean>(true)
  const [, setRerender] = useState<number>(0)
  const startX = useRef<number>(0)
  const startY = useRef<number>(0)
  const currentX = useRef<number>(0)
  const currentY = useRef<number>(0)
  const [cooldownSwipe, setCooldownSwipe] = React.useState<boolean>(false)
  const [isDragging, setIsDragging] = React.useState(false)
  const definedSwipe = useRef<boolean>(false)
  const isSwipe = useRef<boolean>(false)
  const currentSlidePosition = useRef<number>(0)
  const nextSlidePosition = useRef<number>(0)
  const [swipeAnimation, setSwipeAnimation] = React.useState<boolean>(false)
  const [diffTriggerX, setDiffTriggerX] = React.useState<number>(0)
  const sideAnim = useRef<number>(0)

  function SliderByTimer() {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setSwipeAnimation(false)
      setFirstRender(false)
      currentSide.current = 1
      currentIndexSlide.current = (currentIndexSlide.current + 1) % images.length
      setCooldownTime(Date.now())
    }, 3000)
  }

  function startDrag(e: React.MouseEvent | React.TouchEvent) {
    if (Date.now() - cooldownTime <= 1500) {
      setCooldownSwipe(true)
      return
    }
    setIsDragging(true)
    if ('touches' in e) {
      startX.current = e.touches[0].clientX
      startY.current = e.touches[0].clientY
      currentX.current = e.touches[0].clientX
      currentY.current = e.touches[0].clientY
    } else {
      startX.current = e.clientX
      startY.current = e.clientY
      currentX.current = e.clientX
      currentY.current = e.clientY
    }
  }

  function moveDrag(e: React.MouseEvent | React.TouchEvent) {
    if (cooldownSwipe || !isDragging) {
      return
    }
    if ('touches' in e) {
      currentX.current = e.touches[0].clientX
      currentY.current = e.touches[0].clientY
    } else {
      currentX.current = e.clientX
      currentY.current = e.clientY
    }
    const diffX = Math.abs(startX.current - currentX.current)
    const diffY = Math.abs(startY.current - currentY.current)
    if (diffX > diffY && !definedSwipe.current) {
      setSwipeAnimation(true)
      definedSwipe.current = true
      isSwipe.current = true
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
    } else if (diffX < diffY && !definedSwipe.current) {
      definedSwipe.current = true
      isSwipe.current = false
    }
    if (isSwipe.current) {
      setFirstRender(false)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      const rect = divRef.current[currentIndexSlide.current]
      if (!rect) return
      if (startX.current - currentX.current > 0) {
        currentSide.current = 1
      } else {
        currentSide.current = -1
      }
      if (Math.floor(diffX / (window.innerWidth / 2)) === 0) {
        currentSlidePosition.current = (startX.current - currentX.current) / (window.innerWidth) * 100 * -1
        nextSlidePosition.current = (window.innerWidth - diffX) / (window.innerWidth) * 100 * currentSide.current
      } else if (Math.floor(diffX / (window.innerWidth / 2)) === 1) {
        currentSlidePosition.current = (window.innerWidth - diffX) / (window.innerWidth) * 100 * currentSide.current
        nextSlidePosition.current = (startX.current - currentX.current) / (window.innerWidth) * 100 * -1
      }
      if (diffTriggerX < Math.floor(diffX / (window.innerWidth / 2)) || diffTriggerX > Math.floor(diffX / (window.innerWidth / 2))) {
        currentIndexSlide.current = (currentIndexSlide.current + 1) % images.length
      }
      if (Math.floor(diffX / (window.innerWidth / 2)) !== 2) {
        setDiffTriggerX(Math.floor(diffX / (window.innerWidth / 2)))
      }
      if (diffX >= window.innerWidth) {
        startX.current = currentX.current
      } else {
        setRerender(prev => prev + 1)
      }
      if (rect.getBoundingClientRect().x > 0) {
        sideAnim.current = -1
      } else {
        sideAnim.current = 1
      }
    }
  }

  function endDrag() {
    setDiffTriggerX(0)
    setCooldownSwipe(false)
    setCooldownTime(Date.now())
    setIsDragging(false)
    startX.current = 0
    startY.current = 0
    currentX.current = 0
    currentY.current = 0
    definedSwipe.current = false
    document.body.style.overflow = 'unset'
    document.body.style.position = 'unset'
    setRerender(0)
    isSwipe.current = false
    setTimeout(() => {
      SliderByTimer()
    }, 1500)
  }

  function SliderByButtons({buttonSide}: { buttonSide: string }) {
    if (Date.now() - cooldownTime < 1500) return
    if (intervalRef.current) clearInterval(intervalRef.current)
    setSwipeAnimation(false)
    setFirstRender(false)
    currentSide.current = buttonSide === 'left' ? -1 : 1
    currentIndexSlide.current = (currentIndexSlide.current + 1) % images.length
    setCooldownTime(Date.now())
    setTimeout(() => {
      SliderByTimer()
    }, 1500)
  }

  return {
    firstRender,
    swipeAnimation,
    startDrag,
    moveDrag,
    endDrag,
    currentIndexSlide,
    SliderByButtons,
    SliderByTimer,
    intervalRef,
    isSwipe,
    currentSide,
    currentSlidePosition,
    nextSlidePosition,
    sideAnim
  }
}