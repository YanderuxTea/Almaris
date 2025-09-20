'use client'
import LoaderSpinner from '@/components/shared/LoaderSpinner'
import React, {useEffect} from 'react'

export default function Preloader() {
  const [isTransition, setIsTransition] = React.useState(false)
  const preloaderRef = React.useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    setIsTransition(true)
    setTimeout(() => {
      preloaderRef.current && (preloaderRef.current.style.display = 'none')
    }, 500)
  }, [])
  return <div
    ref={preloaderRef}
    className={`flex min-h-screen fixed bg-white z-100 w-full items-center justify-center transition-opacity duration-500 ease-in-out ${isTransition ? 'opacity-0' : 'opacity-100'}`}>
    <LoaderSpinner/>
  </div>
}