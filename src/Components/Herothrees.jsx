import React from 'react'

const Herothrees = () => {
  return (
    <div className='conatiner  p-3 bg-white mt-5 flex flex-col items-center lg:flex-row   lg:justify-around  gap-2'>

        <div className='grid gap-2'>
              <img className=' h-48  lg:h-60' src="https://miro.medium.com/max/1200/0*M4bxiCIjcTK-2Xr6.jpeg" alt="" />
              <p className='text-center text-lg font-bold  lg:text-xl'>UI/UX Design</p>
              <p className='text-center text-xs font-semibold lg:text-sm'>Master the art of creating intuitive user interfaces.</p>
        </div>

        <div className='grid gap-3 mt-10 lg:mt-0'>
              <img className=' h-48  lg:h-60' src="https://miro.medium.com/max/1200/0*M4bxiCIjcTK-2Xr6.jpeg" alt="" />
              <p className='text-center text-lg font-bold lg:text-xl '>Web Development</p>
              <p className='text-center text-xs font-semibold lg:text-sm'>Build dynamic and responsive websites from scratch.</p>
        </div>
        
        <div className='grid gap-2 mt-10 lg:mt-0'>
              <img className=' h-48  lg:h-60' src="https://miro.medium.com/max/1200/0*M4bxiCIjcTK-2Xr6.jpeg" alt="" />
              <p className='text-center text-lg font-bold  lg:text-xl'>Game Development</p>
              <p className='text-center text-xs font-semibold lg:text-sm'>Create immersive and engaging gaming experiences.</p>
        </div>
        
        
    </div>
  )
}

export default Herothrees