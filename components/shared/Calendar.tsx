import React, {RefObject, useEffect, useRef} from 'react'

export default function Calendar({dateBlockRef, setIsOpen}: {
  dateBlockRef: RefObject<HTMLParagraphElement | null>,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const calendarRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    function closeCalendar(e: MouseEvent | TouchEvent) {
      if (!calendarRef.current || !dateBlockRef.current) return
      if (!dateBlockRef.current.contains(e.target as Node) && !calendarRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    window.addEventListener('click', closeCalendar)
    window.addEventListener('touchmove', closeCalendar)
    return () => {
      window.removeEventListener('click', closeCalendar)
      window.removeEventListener('touchmove', closeCalendar)
    }
  }, [])
  return (
    <div ref={calendarRef}
         className='p-2 bg-white text-[#555555] absolute translate-y-10 flex flex-col gap-5 md:flex-row border border-[#CCCCCC] rounded-sm'>
      <div className='flex-col flex gap-2.5'>
        
      </div>
      <div className='flex-col flex gap-2.5'>
      </div>
    </div>
  )
}