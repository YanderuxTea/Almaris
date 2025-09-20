import React from 'react'

export default function LoaderSpinner() {
  return <div className='w-16 h-16 mx-auto relative animate-spinLoader'>
    {[...Array(8)].map((_, index) => {
      const rotation = -45 - index * 20
      return <div key={index}
                  className='absolute w-full h-full after:content-[""] after:w-1.5 after:h-1.5 after:bg-[#AB8965] after:rounded-full after:absolute animate-dotSpinLoader'
                  style={{
                    '--base-rotation': `${rotation}deg`,
                    transform: `rotate(${rotation}deg)`,
                    transitionDelay: `${index * 0.1}s`
                  } as React.CSSProperties}>
      </div>
    })}
  </div>
}

