'use client'
import {images} from '@/public/data/ImagesForSlider'
import Image from 'next/image'
import React, {useEffect, useRef} from 'react'
import ButtonForSlider from '@/components/shared/ButtonForSlider'
import SlidersFunctions from '@/public/features/functions/SlidersFunctions'

export default function Slider() {

  const divRef = useRef<(HTMLDivElement | null)[]>([null])
  const {
    SliderByTimer,
    intervalRef,
    SliderByButtons,
    moveDrag,
    endDrag,
    startDrag,
    currentIndexSlide,
    isSwipe,
    firstRender,
    swipeAnimation,
    currentSide,
    currentSlidePosition,
    nextSlidePosition,
    sideAnim
  } = SlidersFunctions({divRef: divRef})
  useEffect(() => {
    SliderByTimer()
    const intRef = intervalRef.current
    return () => {
      if (intRef) clearInterval(intRef)
    }
  }, [])
  return (
    <section className='min-h-screen relative flex flex-row items-center overflow-clip justify-between'>
      <ButtonForSlider buttonSide='left' SliderByButtons={SliderByButtons}/>
      <ButtonForSlider buttonSide='right' SliderByButtons={SliderByButtons}/>
      {images.map((image, i) => {
        return <div
          ref={(el) => {
            divRef.current[i] = el
          }}
          className={`absolute w-full h-full ${i === currentIndexSlide.current ? isSwipe.current ? 'z-2' : firstRender ? 'animate-none z-2' : swipeAnimation ? 'animate-currentSlideAnimSwipe z-2' : 'animate-currentSlideAnim z-2' : isSwipe.current ? 'z-1' : firstRender ? 'animate-none z-1' : swipeAnimation ? 'animate-nextSlideAnimSwipe z-1' : 'animate-nextSlideAnim z-1'}`}
          style={{
            '--current-side': currentSide.current,
            '--curr-pos': `${currentSlidePosition.current}%`,
            '--next-pos': `${nextSlidePosition.current}%`,
            '--anim-side': sideAnim.current,
            transform: `${isSwipe.current ? (i === currentIndexSlide.current) ? `translateX(${currentSlidePosition.current}%)` : `translateX(${nextSlidePosition.current}%)` : 'translateX(0%)'}`
          } as React.CSSProperties}
          key={i}
          onTouchStart={(e) => startDrag(e)}
          onTouchMove={(e) => moveDrag(e)}
          onTouchEnd={() => endDrag()}
          onMouseDown={(e) => startDrag(e)}
          onMouseMove={(e) => moveDrag(e)}
          onMouseUp={() => endDrag()}
        >
          <Image src={image} alt='image for slider' priority draggable={false}
                 className='w-full h-full object-cover object-left -z-1'/>
        </div>
      })}
    </section>
  )
}