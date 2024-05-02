import React from 'react'
import {ChevronDown} from "lucide-react"
import Accordions from './Accordions'
const Heronine = () => {
  return (
    <div className='conatiner p-3   lg:p-10   bg-white flex flex-col gap-5'>
             <div className='flex flex-col items-center gap-3'>
                <h2 className='text-4xl font-bold '>FAQs</h2>
                <p className=' text-xs text-center lg:text-lg'>Find answers to common questions about our courses, platforms, and enrollment process.</p>
             </div>
 
           <div className='flex flex-col gap-2'>
                   <Accordions question="How do i Enroll?" answer="Give the Answer" />
                   <Accordions question="How do i Enroll?" answer="Give the Answer" />
                   <Accordions question="How do i Enroll?" answer="Give the Answer" />
                   <Accordions question="How do i Enroll?" answer="Give the Answer" />
           </div>


                <div className='flex flex-col items-center gap-2'>
                    <p className='text-2xl font-bold lg:text-4xl'>Still have questions?</p>
                    <p className='text-base font-thin lg:text-xl'>Feel free to reach out to us.</p>
                </div>




    </div>
  )
}

export default Heronine