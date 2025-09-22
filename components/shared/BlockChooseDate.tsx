'use client'
import {jost} from '@/public/Fonts'
import React, {useRef} from 'react'
import Month from '@/public/features/Variables/Month'
import Calendar from '@/components/shared/Calendar'
import VariablesCalendar from '@/public/features/Variables/VariablesCalendar'
import {ContextCalendar} from '@/public/features/context/ContextCalendar'

export default function BlockChooseDate() {
  const [isOpen, setIsOpen] = React.useState(false)
  const {variables} = VariablesCalendar()
  const {abbreviatedMonth} = Month()
  const dateBlockRef = useRef<HTMLParagraphElement | null>(null)
  return (
    <div className='gap-2.5 flex flex-col justify-center items-center '>
      <p className='text-sm text-[#AB8965]'>Choose Date</p>
      <p ref={dateBlockRef} className={`text-xl ${jost.className} select-none`}
         onClick={() => setIsOpen(true)}>{`${abbreviatedMonth[variables.currentDate.getMonth()]} ${variables.currentDate.getDate()} - ${abbreviatedMonth[variables.currentNextDate.getMonth()]} ${variables.currentNextDate.getDate()}`}</p>
      {isOpen &&
        <ContextCalendar.Provider value={variables}><Calendar dateBlockRef={dateBlockRef}
                                                              setIsOpen={setIsOpen}/></ContextCalendar.Provider>}
    </div>
  )
}