import React, {useEffect, useRef, useState} from 'react'

interface IFunctionHeader {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FunctionHeader({setIsOpen}: IFunctionHeader) {
  const [result, setResult] = useState<boolean>(false)
  const [isTopPage, setIsTopPage] = useState<boolean>(false)
  const [currentWidth, setCurrentWidth] = useState<number>(0)
  const prevScroll = useRef<number>(0)
  useEffect(() => {
    const currentScroll = window.scrollY

    function handleScroll() {
      const currentScroll = window.scrollY
      setResult(
        currentScroll > prevScroll.current &&
        document.body.style.overflow !== 'hidden'
      )
      setIsTopPage(currentScroll < 1)
      prevScroll.current = currentScroll
    }

    function handleResize() {
      setCurrentWidth(window.innerWidth)
      window.innerWidth >= 1024 ? setIsOpen(false) : null
    }

    setIsTopPage(currentScroll < 1)
    setCurrentWidth(window.innerWidth)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => (
      window.removeEventListener('scroll', handleScroll),
        window.removeEventListener('resize', handleResize)
    )
  }, [])
  return {result, isTopPage, currentWidth}
}
