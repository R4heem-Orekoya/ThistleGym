import React from 'react'

const Training = () => {
  return (
    <section className='py-[80px]'>
        <h2 className='text-center text-2xl font-semibold sm:text-lg'>Our Trainings</h2>

        <div className='grid grid-cols-2 md:grid-cols-1 gap-6 mt-16'>
            <div className='bg-[url("./assets/benchpress.jpg")] bg-center bg-norepeat bg-cover aspect-square md:aspect-[16/11] sm:aspect-square flex items-end justify-center p-6'>
                <button className='px-7 py-3 ring-2 ring-white hover:bg-white hover:text-purple-500'>Bench Press</button>
            </div>
            <div className='bg-[url("./assets/bodybalance.jpg")] bg-center bg-norepeat bg-cover aspect-square md:aspect-[16/11] sm:aspect-square flex items-end justify-center p-6'>
                <button className='px-7 py-3 ring-2 ring-white hover:bg-white hover:text-purple-500'>Body Balance</button>
            </div>
            <div className='bg-[url("./assets/bodybuilding.jpg")] bg-center bg-norepeat bg-cover aspect-square md:aspect-[16/11] sm:aspect-square flex items-end justify-center p-6'>
                <button className='px-7 py-3 ring-2 ring-white hover:bg-white hover:text-purple-500'>Body Building</button>
            </div>
            <div className='bg-[url("./assets/deadlift.jpg")] bg-center bg-norepeat bg-cover aspect-square md:aspect-[16/11] sm:aspect-square flex items-end justify-center p-6'>
                <button className='px-7 py-3 ring-2 ring-white hover:bg-white hover:text-purple-500'>Dead Weight Lifting</button>
            </div>
        </div>
    </section>
  )
}

export default Training
