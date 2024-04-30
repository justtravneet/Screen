import React from 'react'

const Heroseven = () => {
  return (
    <div   className='conatiner p-3   lg:p-10   bg-blue-950 mt-5 flex flex-col gap-5'>
           <p className=' text-white text-2xl font-bold lg:text-4xl'>Unlock Your Potential with Us</p>
           <p className='text-white text-sm font-thin lg:text-xl'>Take your skills to the next level with our industry-leading courses.</p>
           <div className='flex gap-2'>
                   <div>
                       <button class=" bg-yellow-400  text-black  w-24 h-10 py-2 px-2 lg:px-4 lg:w-32">
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
  )
}

export default Heroseven