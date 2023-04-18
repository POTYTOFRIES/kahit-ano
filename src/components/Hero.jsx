import React from 'react'

const Hero = () => {
  return ( 
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] rounded-3xl bg-black/40 flex flex-col justify-center'>
                <h1 className='px-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Can't <span className='text-orange-500'>Decide</span></h1>
                <h1 className='px-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>What</span> To Eat?</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover rounded-3xl' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
        </div>
    </div>
  )
}

export default Hero