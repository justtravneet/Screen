import React from 'react'
import  {AlignJustify} from "lucide-react"
function Navbar (){
    // const togglebtn = document.querySelector(".toggle-button");
    // const navmenu = document.querySelector(".navmenu");
    
    // togglebtn.addEventListener("click" ,() => {
    //      navmenu.classList.toggle('top-[64px]');
    // })



  return (
    <nav className='conatiner items-center p-3 bg-white flex justify-between mt-2'>

     <a href="http://">
       <p className='font-bold'>LOGO</p> 
     </a>

     <div id='nav-menu' className='navmenu flex absolute top-[64px]  flex-col gap-4 lg:relative lg:flex-row lg:top-0 lg:items-center lg:gap-6'>
            <a className='hover:text-blue-600' href="http://">About Us</a>
            <a className='hover:text-blue-600' href="http://">Courses</a>
            <a className='hover:text-blue-600' href="http://">Pricing</a>
            <a className='hover:text-blue-600' href="http://">Services</a>

            <div className='flex flex-col gap-2 lg:flex-row'>
                     <button class="bg-white  text-black py-2 px-4 border-black border-2 lg:px-7">
                       Learn
                    </button>
                  
                    <button class="bg-black  text-white py-2 px-4 border-black border-2 lg:px-7">
                       Sign Up
                    </button>
            </div>
    </div>

    <div className='toggle-button lg:hidden'>
     <AlignJustify />   
    </div>
    </nav>
   
  )
}

export default Navbar