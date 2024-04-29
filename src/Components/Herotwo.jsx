import React from 'react'
import{ChevronRight} from"lucide-react"
const Herotwo = () => {
  return (
    <div className='conatiner p-3 flex py- flex-col lg:flex-row lg:items-center lg:justify-between '>
            <div className='flex gap-3 flex-col '>
                  <p className=' text-sm  font-roboto font-semibold  justify-center'>Empowering Education</p>
                  <h3 className=' text-3xl font-semibold '>
                      Transforming Lives Through Live  Online Education
                  </h3>
                  <p className='text-xs font-light font-roboto lg:text-base'>Screen Shiksha is committed to providing high-quality live online education. Our platform offers professional training in UI/UX Design, Web Development, and Game Development. With our interactive and engaging classes, we aim to empower students and help them achieve their career goals.</p>
              
              <div className='flex gap-3'>
                      <button class="bg-black  text-white py-1 px-3 lg:px-6 lg:py-2">
                       Learn More
                      </button>
                        
                      <button class="bg-white text-black py-1 px-1 lg:px-6 lg:py-2 flex hover:text-blue-600 items-center">
                       Sign Up
                       <span><ChevronRight /></span>
                      </button>
              </div>

            </div>

            <div className=' rounded mt-4 flex justify-center lg:mt-0'>
                 <img className=' bg-green-100 h-72 rounded lg:w-96 lg:h-80' src="" alt="" />
            </div>
    </div>
  )
}

export default Herotwo