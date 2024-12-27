const AnnouncmentBar = () => {
  return (
    <div className='w-full overflow-hidden bg-black text-white py-3'>
      <div className='flex animate-scroll'>
        <div className='flex items-center px-1 gap-64'>
          <p className='text-[17px] w-max whitespace-nowrap'>
            30% korting wees snel hebben voor nood
          </p>
          <p className='text-[17px] w-max whitespace-nowrap'>
            Gratis verzending orders boven €30
          </p>
          <p className='text-[17px] w-max whitespace-nowrap'>
            Noodpakket wat je moet hebben voor nood
          </p>
        </div>
      </div>
    </div>
  )
}

export default AnnouncmentBar
