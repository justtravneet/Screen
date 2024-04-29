import React from 'react'

const Heroone = () => {
  return (
    <div  className='conatiner  p-3 bg-white mt-80 gap-4 flex flex-col lg:gap-5 lg:pt-28 lg:pb-14 lg:mt-0'>
        <p className=' text-xs font-roboto font-semibold'>Transform</p>
        <h3 className=' text-4xl font-semibold '>
            Empowering Success Through <br /> Education    
        </h3>

        <p className='text-sm font-light font-roboto lg:hidden'>At Screen Shiksha, we believe in providing high-quality professional training to help you succeed.</p>

        <div className='flex gap-3 lg:gap-4 lg:pt-5'>
               <button class="bg-black  text-white py-1 px-3 lg:px-6 lg:py-2">
                 Learn More
               </button>
               
               <button class="bg-white  text-black border-black border-2 py-1 px-3 lg:px-6 lg:py-2">
                 Contact Us
               </button>
        </div>
    </div>
  )
}

export default Heroone