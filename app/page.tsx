import Header from '@/components/ui/Header'
import Slider from '@/components/ui/Slider'
import Preloader from '@/components/ui/Preloader'
import Reservation from '@/components/ui/Reservation'
import Test from '@/components/ui/Test'

export default function page() {
  return (
    <main className='flex flex-col min-h-screen'>
      <Preloader/>
      <Header/>
      <Slider/>
      <Reservation/>
      <Test/>
    </main>
  )
}
