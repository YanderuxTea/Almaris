import Arrow from '@/public/svg/Arrow'
import React, {JSX} from 'react'

interface Props {

  SliderByButtons: ({buttonSide}: {
    buttonSide: string;
  }) => void
  buttonSide: string
}

export default function ButtonForSlider({buttonSide, SliderByButtons}: Props): JSX.Element {
  return <button className={`z-3 ${buttonSide === 'left' ? 'rotate-90' : '-rotate-90'} cursor-pointer scale-175 px-2.5`}
                 onClick={() => SliderByButtons({buttonSide: buttonSide})}><Arrow color='AB8965'/></button>
}