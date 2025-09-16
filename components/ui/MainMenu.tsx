import {arrMainMenuButtonData} from '@/public/data/MainMenuButtonData'
import {jost} from '@/public/Fonts'
import Arrow from '@/public/svg/Arrow'
import Link from 'next/link'
import {useState} from 'react'
import RoomsList from './RoomsList'
import PagesList from './PagesList'

interface IMainMenu {
  isOpen: boolean;
}

export default function MainMenu({isOpen}: IMainMenu) {
  const [isOpenListIndex, setIsOpenListIndex] = useState<number[]>([])

  function handleToggle(index: number) {
    setIsOpenListIndex((prev) =>
      prev.includes(index)
        ? prev.filter((val) => val !== index)
        : [...prev, index]
    )
  }

  return (
    <div
      className={`z-2 fixed w-full flex flex-col max-h-screen top-0 px-5 py-10 pt-22.5 transition-transform duration-300 ease-in-out overflow-y-auto ${
        isOpen ? 'translate-y-0' : 'translate-y-[-100%]'
      }`}
    >
      {arrMainMenuButtonData.map((element, index) => {
        const isActive = isOpenListIndex.includes(index)
        return (
          <div key={index}>
            <div className='flex flex-row justify-between'>
              <Link
                href={element.href}
                className={`${jost.className} text-[#ECEFF3] text-[17px] py-2.5 w-max transition-colors duration-300 ease-in-out active:text-[#AB8965]`}
              >
                {element.title}
              </Link>
              {element.isList ? (
                <button onClick={() => handleToggle(index)}>
                  <Arrow rotate={isActive ? 180 : 0}/>
                </button>
              ) : null}
            </div>
            {element.isList ? (
              isActive ? (
                element.title === 'Rooms' ? (
                  <div className='p-5'>
                    <RoomsList/>
                  </div>
                ) : (
                  <div className='pl-10'>
                    <PagesList/>
                  </div>
                )
              ) : null
            ) : null}
            <hr className='text-white/20 lg:hidden'/>
          </div>
        )
      })}
    </div>
  )
}
