import React from 'react'
import {Building2 ,ChevronRight ,MousePointerClick ,Sun} from "lucide-react"
const Herofive = () => {
  return (
    <div className='px-[16px] lg:px-[48px] xl:px-[200px] 2xl:px-[300px] '>
               <div className='flex flex-col gap-2 py-4 lg:flex-row lg:gap-10 justify-between'>
                      <div className='lg:w-[520px]'>
                         <p className='text-2xl font-bold lg:text-4xl'>Experience Live Online Classes  with Expert Trainers</p>
                      </div>
                      <div className=' lg:w-[400px]'>
                        <p className='pl-1 text-sm  lg:w-96 lg:text-base'>At Screen Shiksha, we offer high-quality professional training in UI/UX Design, Web Development, and Game Development. Our classes are conducted live online, ensuring interactive sessions and personalized guidance from our experienced trainers.</p>
                      </div>
               </div>

               
               <div className='mt-10 flex flex-col lg:flex-row lg:mt-20 lg:justify-between '>
                     <div className='flex flex-col gap-3 lg:w-72'>
                        <a href="http://">
                        <img width={40} className=' lg:w-[50]' src="./building.svg" alt="" />
                        </a>
                        <p className='text-lg font-bold'>Learn from Industry Experts</p>
                        <p className=' text-sm font-thin'>Our trainers are professionals with extensive industry experience, providing you with practical insights and        
                            real-world knowledge.</p>

                          <div className='flex items-center hover:text-blue-600'>
                                        <div>
                                              <button class=  "text-blue-600 hover:text-blue-600    w-12 h-10 py-0 px-0 text-left ">
                                              <a href="http://">Join</a> 
                                             </button>
                                         </div>
                                         <div className='600 text-blue-600'><ChevronRight /></div>     
                      
                            </div>   
                     </div>


                     <div className='flex flex-col mt-10 lg:mt-0 gap-2 lg:w-72'>
                        <a href="http://">
                         <img width={50} src="./interactive.svg" alt="" />
                        </a>
                        <p className='text-lg font-bold'>Learn from Industry Experts</p>
                        <p className=' text-sm font-thin'>Our trainers are professionals with extensive industry experience, providing you with practical insights and        
                            real-world knowledge.</p>

                          <div className='flex items-center hover:text-blue-600'>
                                        <div>
                                              <button class=  "text-blue-600 hover:text-blue-600    w-16 h-10 py-0 px-0 text-left ">
                                              <a href="http://">Enroll</a> 
                                             </button>
                                         </div>
                                         <div className='600 text-blue-600'><ChevronRight /></div>     
                      
                            </div>   
                     </div>

                     <div className='flex flex-col  mt-10 mb-4 lg:mb-0 lg:mt-0 gap-2  lg:w-72'>
                        <a href="http://">
                        <img width={50} src="./interactive.svg" alt="" />
                        </a>
                        <p className='text-lg font-bold'>Learn from Industry Experts</p>
                        <p className=' text-sm font-thin'>Our trainers are professionals with extensive industry experience, providing you with practical insights and        
                            real-world knowledge.</p>

                          <div className='flex items-center hover:text-blue-600'>
                                        <div>
                                              <button class=  "text-blue-600 hover:text-blue-600   w-24 h-10 py-0 px-0 text-left ">
                                              <a href="http://"> Get Started</a>
                                             </button>
                                         </div>
                                         <div className='600 text-blue-600'><ChevronRight /></div>     
                      
                            </div>   
                     </div>








               </div>


    </div>
  )
}

export default Herofive