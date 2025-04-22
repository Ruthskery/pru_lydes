import React from 'react'

function Last() {
  return (
    <div className='w-full h-[80vh] bg-[#14110F] flex justify-center'>
        <div className='flex flex-col gap-10 text-center ml-100 mr-100 mt-20'>
            <h1 className='flex justify-center text-white text-7xl font-semibold'>With PruLydes, you&apos;re not just insured you&apos;re empowered to grow, protect, and thrive.</h1>
            <h2 className='text-white text-4xl'>Why choose PruLydes?</h2>
            <p className='text-white text-xl font-light'>At PruLydes, your financial future is our priority. Led by Lydelyn Romero Quitong, a top financial consultant at Pru Life UK, we offer more than just insurance—we provide guidance, clarity, and confidence. Whether you&apos;re planning for your family, your career, or your retirement, our commitment is to give you personalized financial solutions that grow with you.</p>

            <div className='flex gap-4 justify-center'>
                <button className='bg-[#E1B951] text-black px-4 py-2 text-xl rounded-2xl font-bold cursor-pointer'>Shedule an Appointment</button>
                <button className='bg-[#E1B951] text-black px-4 py-2 text-xl rounded-2xl font-bold cursor-pointer'>Inflation Calculator</button>
            </div>
        </div>
    </div>
  )
}

export default Last