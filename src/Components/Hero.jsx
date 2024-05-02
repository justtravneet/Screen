import React from 'react'

const Hero = () => {
  return (
    <div  className='conatiner  p-3  bg-white mt-80 gap-4 flex flex-col lg:gap-5 lg:pt-28 lg:pb-14  lg:flex-row  lg:justify-between   lg:mt-12'>
         <div className=' flex'>
            <h2 className=' text-4xl font-bold font-Times New Roman lg:text-4xl items-center'>Unlock Your Potential  With <br /> Live  Online Training</h2>
         </div>

         <div className='flex gap-5 flex-col lg:w-96 lg:h-auto lg:mr-16' >
                  <p className=' text-sm lg:text-lg'>Join our live online courses in UI/UX Design, Web Development, and Game Development to gain the skills you need to succeed.</p>

                <div className='flex gap-3'> 
                       <button class="bg-purple-600 text-white  w-24 h-10 py-1 px-1 lg:px-7">
                           <a href="http://"> Enroll</a>
                       </button>

                       <button class="bg-white  text-black  w-24  py-0 px-1 border-black border-2 lg:px-2 lg:w-28">
                           <a href="http://">Learn More</a> 
                       </button>
                </div>
         </div>

        
    </div>
  )
}

export default Hero