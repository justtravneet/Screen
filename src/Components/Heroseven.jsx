import React from 'react'

const Heroseven = () => {
  return (
    <div>

    
        <div className='px-[16px] lg:px-[48px] xl:px-[200px] flex  flex-col gap-3 py-4 bg-dark-blue  '>
               <p className=' text-white text-2xl font-bold lg:text-4xl'>Unlock Your Potential with Us</p>
               <p className='text-white text-sm font-thin lg:text-xl'>Take your skills to the next level with our industry-leading courses.</p>
             <div className='flex gap-2'>
                   <div>
                       <button class="  bg-yellow  text-black  w-24 h-10 py-2 px-2 lg:px-4 lg:w-32">
                          <a href="http://">Sign up</a> 
                       </button>
                   </div>
                   <div>
                         <button class=" bg-transparent  text-white border-white border-2  w-24 h-10 py-2 px-2 lg:px-4 lg:w-32">
                            <a href="http://">Enquire</a> 
                        </button>
                   </div>
           </div>
        </div>
    </div>  
  )
}

export default Heroseven