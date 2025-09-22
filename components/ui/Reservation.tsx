import {jost} from '@/public/Fonts'
import CounterForReservation from '@/components/shared/CounterForReservation'
import BlockChooseDate from '@/components/shared/BlockChooseDate'

export default function Reservation() {
  return (
    <section className='w-full bg-[#181818] py-7.25 flex items-center justify-center px-5'>
      <div
        className='flex flex-col text-white text-center max-w-300 lg:flex-row w-full justify-between items-center gap-5'>
        <div className='flex flex-col md:flex-row justify-between items-center w-full gap-5'>
          <p className='text-[26px]'>Reservation</p>
          <BlockChooseDate/>
          <CounterForReservation title='Adult'/>
          <CounterForReservation title='Children'/>
          <button
            className={`bg-[#AB8965] max-w-max px-5 py-2 tracking-[2px] text-[12px] ${jost.className} font-medium hidden lg:block cursor-pointer`}>CHECK
            AVAILABILITY
          </button>
        </div>
        <button
          className={`bg-[#AB8965] max-w-max px-5 py-2.5 tracking-[2px] text-[12px] ${jost.className} lg:hidden font-medium cursor-pointer`}>CHECK
          AVAILABILITY
        </button>
      </div>
    </section>
  )
}