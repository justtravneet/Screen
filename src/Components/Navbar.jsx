import React from 'react'
import  {AlignJustify,ChevronDown } from "lucide-react"

function Navbar (){
    // const togglebtn = document.querySelector(".toggle-button");
    // const navmenu = document.querySelector(".navmenu");
    
    // togglebtn.addEventListener("click" ,() => {
    //      navmenu.classList.toggle('top-[64px]');
    // })



  return (
 
         <div className='  bg-white  '>
              <div className='flex items-center  justify-between px-[16px] lg:px-[48px] xl:px-[190px] py-3'>
                    <div>
                      <img className='h-[40px] lg:h-[50px]' src="./Layer_1.svg" alt="" />
                    </div>
                    <div className='items flex items-center gap-[16px] '>
                         <a className=' text-lg' href="http://">About Us</a>
                         <a className=' text-lg' href="http://">Pricing</a>
                         <a className=' text-lg' href="http://">Courses</a>
                         <a className=' text-lg' href="http://">Contact Us</a>

                         <div className=' flex gap-[16px]'>
                            <button class=  "text-black py-0 px-2 lg:py-3 lg:px-3 border-black border-2">
                            <a className=' text-xl' href="http://"> Learn</a>
                            </button>
                            <button class=  "text-white bg-dark-blue py-0 px-3    ">
                            <a className=' text-lg' href="http://">Sign up</a>
                            </button>
                         </div>
                    </div>

                    <div className=' md:hidden'>
                      <AlignJustify />
                    </div>
              </div>

         </div>
  
    
   
  )
}

export default Navbar