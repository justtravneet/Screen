import React from 'react'
import{Box} from "lucide-react"
const Herothree = () => {
  return (
     <div className='conatiner p-3 bg-green-100 flex py- flex-col lg:flex-row lg:items-center lg:justify-between mt-10'>
             <div className='flex gap-3 flex-col '>
                  <Box size={28} strokeWidth={2.25} />
                  <h3 className=' text-3xl font-semibold '>
                      Transforming Lives Through Live  Online Education
                  </h3>
                  <p className='text-xs font-light font-roboto lg:text-base'>Screen Shiksha is committed to providing high-quality live online education. Our platform offers professional training in UI/UX Design, Web Development, and Game Development. With our interactive and engaging classes, we aim to empower students and help them achieve their career goals.</p>
             </div>
     </div>
    
  )
}

export default Herothree