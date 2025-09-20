'use client'
import {images} from '@/public/data/ImagesForSlider'
import Image from 'next/image'
import React, {useEffect, useRef} from 'react'
import ButtonForSlider from '@/components/shared/ButtonForSlider'
import SlidersFunctions from '@/public/features/functions/SlidersFunctions'
import StarsByCounts from '@/components/shared/StarsByCounts'
import SliderPagination from '@/components/shared/SliderPagination'
import {jost} from '@/public/Fonts'

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
      <SliderPagination currentIndex={currentIndexSlide}/>
      {images.map((image, i) => {
        return <div
          ref={(el) => {
            divRef.current[i] = el
          }}
          className={`absolute w-full h-full flex justify-center items-center ${i === currentIndexSlide.current ? isSwipe.current ? 'z-2' : firstRender ? 'animate-none z-2' : swipeAnimation ? 'animate-currentSlideAnimSwipe z-2' : 'animate-currentSlideAnim z-2' : isSwipe.current ? 'z-1' : firstRender ? 'animate-none z-1' : swipeAnimation ? 'animate-nextSlideAnimSwipe z-1' : 'animate-nextSlideAnim z-1'}`}
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
          <div className='absolute flex inset-0 items-center justify-center p-10'>
            <div
              className='flex md:aspect-square w-full flex-col gap-5 md:w-auto justify-center h-[calc(80%)] items-center rounded-t-full border-2 border-[#AB8965] backdrop-blur-xl text-center text-white'>
              <StarsByCounts count={5} color='#E4A853'/>
              <p className='text-5xl/13.75 tracking-[-2px] font-light lg:text-[64px]/18.25 max-w-193'>
                {i === 0 ? 'Where Every Stay is Extraordinary' : 'Experience Hospitality Like Never Before'}
              </p>
              <p className={`${jost.className} text-white/75 text-[16px]/6. max-w-128`}>
                Discover the perfect blend of luxury, comfort,
                and convenience at Almaris. Nestled in the heart
                of Brooklyn, our hotel is your gateway to an
                unforgettable experience.
              </p>
              <button
                onClick={() => alert('Привет!!')}
                className={`tracking-[2px] text-[12px] ${jost.className} bg-[#AB8965] px-5 py-2.5 cursor-pointer relative after:content[""] after:absolute after:inset-0 after:outline-2 after:outline-black after:blur-[6px] after:-z-1 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100`}>DISCOVER
                ROOMS
              </button>
            </div>
          </div>
          <Image src={image} alt='image for slider' priority draggable={false}
                 className='w-full h-full object-cover object-left -z-1 brightness-75'/>
        </div>
      })}
    </section>
  )
}