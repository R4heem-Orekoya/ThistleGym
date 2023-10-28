import React from 'react'

const Stats = () => {
  return (
    <div className="relative z-10 flex items-center justify-center max-w-screen py-10 bg-[url('./assets/image22.jpg')] bg-cover bg-center bg-no-repeat">
      <div className='absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-purple-950/20 z-10'></div>
      <div className='grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 w-[1100px] max-w-[90%]'>
        <div className='text-center py-20 px-6'>
          <h3 className='text-[50px] font-bold'>24+</h3>
          <p className='text-lg font-semibold'>Training Programs</p>
        </div>
        <div className='text-center py-20 px-6'>
          <h3 className='text-[50px] font-bold'>20+</h3>
          <p className='text-lg font-semibold'>Training Experts</p>
        </div>
        <div className='text-center py-20 px-6'>
          <h3 className='text-[50px] font-bold'>12</h3>
          <p className='text-lg font-semibold'>Years Of Experience</p>
        </div>
        <div className='relative z-20 text-center py-20 px-6'>
          <h3 className='text-[50px] font-bold'>300+</h3>
          <p className='text-lg font-semibold'>Satisfied Clients</p>
        </div>
      </div>
    </div>
  )
}

export default Stats
