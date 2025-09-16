'use client'
import {images} from '@/public/data/ImagesForSlider'
import {useRef} from 'react'
import Image from 'next/image'

export default function Slider() {
  const divRef = useRef<(HTMLDivElement | null)[]>([null])
  return (
    <section className='relative min-h-screen'>
      {images.map((image, i) => {
        return (
          <div className='absolute overflow-hidden z-1 w-full h-full' key={i} ref={(el) => {
            divRef.current[i] = el
          }}>
            <Image src={image} alt='image for slider' className='object-cover object-left brightness-75' priority
                   draggable={false}/>
          </div>)
      })}
    </section>
  )
}