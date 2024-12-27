import { PiPackage } from 'react-icons/pi'
import { TbBus } from 'react-icons/tb'
import { LuTrophy } from 'react-icons/lu'
import { LuWallet } from 'react-icons/lu'

const BottomHeader = () => {
  return (
    <div className='w-full flex items-center justify-center gap-12 mt-5 max-md:flex-col max-md:gap-5 max-md:items-start max-md:w-fit max-md:mx-auto'>
      <div className='flex items-center gap-2 max-md'>
        <div className='rounded-full h-[40px] w-[40px] bg-theme/20 flex items-center justify-center'>
          <PiPackage className='text-xl text-theme' />
        </div>
        <span className='text-[15px] font-semibold'>Ruim 10.000 klanten</span>
      </div>
      <div className='flex items-center gap-2 max-lg:hidden'>
        <div className='rounded-full h-[40px] w-[40px] bg-theme/20 flex items-center justify-center'>
          <TbBus className='text-xl text-theme' />
        </div>
        <span className='text-[15px] font-semibold'>
          Grootste voorraad van Nederland
        </span>
      </div>
      <div className='flex items-center gap-2'>
        <div className='rounded-full h-[40px] w-[40px] bg-theme/20 flex items-center justify-center'>
          <LuTrophy className='text-xl text-theme' />
        </div>
        <span className='text-[15px] font-semibold'>
          Klanten geven ons 9/10
        </span>
      </div>
      <div className='flex items-center gap-2 max-xl:hidden'>
        <div className='rounded-full h-[40px] w-[40px] bg-theme/20 flex items-center justify-center'>
          <LuWallet className='text-xl text-theme' />
        </div>
        <span className='text-[15px] font-semibold'>Voor jou en je gezin</span>
      </div>
    </div>
  )
}

export default BottomHeader
