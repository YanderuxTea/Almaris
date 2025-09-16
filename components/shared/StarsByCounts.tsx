import {JSX} from 'react'
import {Star} from '@/public/svg/Star'

interface Props {
  count: number
  color: string
}

export default function StarsByCounts({count, color}: Props): JSX.Element {
  const arr = (Array(count).fill(0))
  return (
    <div className='flex flex-row gap-2'>
      {arr.map((_, i) => {
        return <Star key={i} color={`${color}`}/>
      })}
    </div>
  )
}