import React from 'react'
import {ChevronRight} from "lucide-react"
const Herofour = () => {
  return (
    <div  className='px-[16px] lg:px-[48px] xl:px-[00px] 2xl:px-[300px] flex  p-3 bg-white mt-5 lg:items-center justify-center gap-2 '>
                <div className='flex lg:items-center lg:justify-center'>  
                      <button class="bg-white  text-black   w-24 h-10 py-1 px-0 border-black border-2   lg:w-28">
                     <a href="http://">Learn More</a>  
                      </button>
                </div>

                <div className='flex items-center hover:text-blue-600'>
                    <div>
                         <button class=  "text-black hover:text-blue-600   w-20 h-10 py-0 px-0 ">
                         <a href="http://"> Sign up</a>
                         </button>
                   </div>
                   <div className='600'><ChevronRight /></div>     
                      
                </div>     

                
    </div>
  )
}

export default Herofour