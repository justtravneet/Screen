import React from 'react'
const Copyr = () => {
  return (
    <div className='conatiner p-3   lg:p-10 flex flex-col lg:flex-row justify-between'>
             <div>
                   <p className='text-sm lg:text-base  lg:pt-2'>© 2023 Screen Shiksha. All rights reserved.</p>
             </div>
             <div className='text-xs flex gap-2 mt-2 lg:text-base lg:gap-3'>
                 <a href="http://">Privacy Policy</a>
                 <a href="http://">Terms of Service</a>
                 <a href="http://">Cookies Settings</a>

             </div>
    </div>
  )
}

export default Copyr