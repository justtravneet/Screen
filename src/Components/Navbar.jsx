import React from 'react'
import  {AlignJustify,ChevronDown } from "lucide-react"

function Navbar (){
    // const togglebtn = document.querySelector(".toggle-button");
    // const navmenu = document.querySelector(".navmenu");
    
    // togglebtn.addEventListener("click" ,() => {
    //      navmenu.classList.toggle('top-[64px]');
    // })



  return (
    <nav className= 'bg-white items-center   flex justify-between  drop-shadow-sm border-b-3  lg:sticky top-0'>

     <a href="http://">
       <img width={80} className='ml-2 m-3 lg:w-[110px]' src="./Layer_1.svg" alt="" /> 
     </a>

     <div id='nav-menu' className='navmenu mr-10 flex absolute top-[100px] left-[18px]  flex-col gap-4 lg:relative lg:flex-row lg:top-0 lg:items-center lg:gap-10'>
            <a className='hover:text-blue-600' href="http://">About Us</a>
            <button  data-bs-toggle="dropdown" aria-expanded="false" >
              <div className='flex hover:text-blue-600'>
                  <div><span className=' flex  text-start'>Courses</span></div>
                   <div><ChevronDown strokeWidth={2.5} /></div>
              </div>   
           </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
            <a className='hover:text-blue-600' href="http://">Pricing</a>
            {/* <a className='hover:text-blue-600' href="http://">Services</a> */}

            <div className='flex flex-col gap-2 lg:flex-row'>
                     <button class="bg-white  text-black py-1 px-3 border-black border-2 lg:px-7">
                      <a href="http://">Learn</a> 
                    </button>
                  
                    <button class="bg-black  text-white py-1 px-3 border-black border-2 lg:px-7">
                       <a href="http://">Sign Up</a>
                    </button>
            </div>
    </div>

    <div className='toggle-button lg:hidden mr-5'>
     <AlignJustify />   
    </div>
    </nav>
   
  )
}

export default Navbar