'use client'
import {jost} from '@/public/Fonts'
import {useState} from 'react'

export default function CounterForReservation({title}: { title: string }) {
  const [count, setCount] = useState<number>(title === 'Adult' ? 1 : 0)
  return (
    <div className='gap-2.5 flex flex-col'>
      <p className='text-sm text-[#AB8965]'>{title}</p>
      <div className='flex flex-row items-center gap-5'>
        <button
          className={`bg-[#AB8965] w-9 h-9 rounded-full ${jost.className} text-2xl active:bg-white active:text-black transition-colors duration-200 ease-in-out cursor-pointer`}
          onClick={() => setCount(prevState => prevState !== 0 ? prevState - 1 : prevState)}>-
        </button>
        <p className={`text-xl ${jost.className}`}>{count}</p>
        <button
          className={`bg-[#AB8965] w-9 h-9 rounded-full ${jost.className} text-2xl active:bg-white active:text-black transition-colors duration-200 ease-in-out cursor-pointer`}
          onClick={() => setCount(prevState => prevState + 1)}>+
        </button>
      </div>
    </div>
  )
}