import {jost} from '@/public/Fonts'
import {JSX, RefObject} from 'react'
import {images} from '@/public/data/ImagesForSlider'

interface Props {
  currentIndex: RefObject<number>
}

export default function SliderPagination({currentIndex}: Props): JSX.Element {
  return (
    <div className={`absolute z-3 right-10 bottom-10 text-white text-xl ${jost.className}`}>
      <p>{currentIndex.current + 1} / <span className='text-white/50'>{images.length}</span></p>
    </div>
  )
}