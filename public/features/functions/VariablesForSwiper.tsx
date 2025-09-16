import {useRef, useState} from 'react'

export default function VariablesForSwiper() {
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [cooldownTime, setCooldownTime] = useState<number>(0)
  const currentSlide = useRef<number>(0)
  const [firstRender, setFirstRender] = useState<boolean>(true)
  return {intervalRef, cooldownTime, currentSlide, firstRender, setFirstRender, setCooldownTime}
}