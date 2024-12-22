const AnnouncmentBar = () => {
  return (
    <div className='w-full overflow-hidden bg-black text-white py-3'>
      <div className='flex animate-scroll'>
        <div className='flex items-center px-1 gap-64'>
          <p className='text-[17px] w-max whitespace-nowrap'>
            Plant 4 trees with every product purchase 🌳
          </p>
          <p className='text-[17px] w-max whitespace-nowrap'>
            Free shipping on orders above €30 📨
          </p>
          <p className='text-[17px] w-max whitespace-nowrap'>
            Last business card you will ever need! 🥇
          </p>
          <p className='text-[17px] w-max whitespace-nowrap'>
            Make a lasting impact on your clients 🤝
          </p>
        </div>
      </div>
    </div>
  )
}

export default AnnouncmentBar
