import {RoomsCards, RoomsLinks} from '@/public/data/RoomsListData'
import {marcellus} from '@/public/Fonts'
import Image from 'next/image'
import Link from 'next/link'

export default function RoomsList() {
  return (
    <div
      className='flex flex-col p-6 bg-white text-[#181818] gap-2.5 lg:flex-row lg:translate-y-15.25 lg:gap-20'>
      <div className='flex flex-col gap-2.5'>
        <p
          className={`font-semibold text-[22px] tracking-[0.5px] ${marcellus.className}`}
        >
          Rooms
        </p>
        {RoomsLinks.map((element, index) => {
          return (
            <Link key={index} href={element.href} className='text-sm'>
              {element.title}
            </Link>
          )
        })}
      </div>
      <div className='flex gap-5 flex-col lg:flex-row'>
        {RoomsCards.map((element, index) => {
          return (
            <div key={index} className='text-center gap-2.5 flex flex-col'>
              <Link
                href={element.href}
                className='relative rounded-sm overflow-clip group'
              >
                <p className='absolute bg-[#AB8965] text-white text-[12px] font-bold px-2.5 py-1 translate-2.75 z-2'>
                  {element.label}
                </p>
                <Image
                  src={element.image}
                  alt={`${element.title}`}
                  className='lg:max-h-50 lg:max-w-65 group-hover:scale-115 transition-transform duration-500 ease-in-out z-1'
                  priority
                />
              </Link>
              <p className={`text-lg font-bold ${marcellus.className}`}>
                {element.title}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
