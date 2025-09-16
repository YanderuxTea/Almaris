import {PagesLinks} from '@/public/data/PagesListData'
import Link from 'next/link'

export default function PagesList() {
  return (
    <div className='flex flex-col lg:bg-white lg:translate-y-15.25 lg:rounded-sm lg:p-1'>
      {PagesLinks.map((element, index) => {
        return (
          <div key={index} className='flex flex-col'>
            <Link
              href={element.href}
              className='py-2 pl-4 text-sm transition-colors duration-300 ease-in-out active:bg-[#AB8965] hover:bg-[#AB8965] hover:text-white lg:px-8 lg:text-[#606060]'
            >
              {element.title}
            </Link>
            {element.hr ? <hr className='text-white/10 lg:hidden'/> : null}
          </div>
        )
      })}
    </div>
  )
}
