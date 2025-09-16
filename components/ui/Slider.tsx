'use client'
import {images} from '@/public/data/ImagesForSlider'
import {useRef} from 'react'
import Image from 'next/image'

export default function Slider() {
  const divRef = useRef<(HTMLDivElement | null)[]>([null])
  return (
    <section>
      {images.map((image, i) => {
        return (
          <div className='absolute overflow-clip z-1' key={i} ref={(el) => {
            divRef.current[i] = el
          }}>
            <Image src={image} alt='image for slider' className='min-h-screen object-cover object-left' priority
                   draggable={false}/>
          </div>)
      })}
    </section>
  )
}