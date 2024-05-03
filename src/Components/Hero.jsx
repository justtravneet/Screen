import React from 'react'

const Hero = () => {
  return (
    
     <div className='bg-grey w-full'>
          <div className='px-[16px] mt-[250px] md:mt-0 flex flex-col gap-3 lg:flex-row lg:justify-between lg:gap-[84px]  lg:mt-[10px] lg:px-[48px]   xl:px-[200px] 2xl:px-[300px] py-3'>
               <div className='  lg:w-[420px] xl:w-[480] md:mt-0'>
                <p className=' text-4xl font-bold'>Unlock Your Potential  with Live Online Training</p>
               </div>
               <div className='flex flex-col gap-4   lg:space-y-5 lg:w-[420px] xl:w-[480]'>
                     <div><p className='text-base  lg:text-xl'>Join our live online courses in UI/UX Design, Web Development, and Game Development to gain the skills you need to succeed.</p></div>
                     <div className='flex gap-2'>
                            <button class=  "text-white bg-purple py-0 px-3    ">
                            <a className=' text-lg' href="http://">Enroll</a>
                            </button>
                            <button class=  "text-black  border-black border-2 py-0 px-3    ">
                            <a className=' text-lg' href="http://">Sign up</a>
                            </button>

                     </div>
               </div>
          </div>
     </div>
        
  
  )
}

export default Hero