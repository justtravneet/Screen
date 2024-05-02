import React from 'react'
import {Facebook ,Instagram ,Twitter ,Linkedin,Youtube} from "lucide-react"
const Herofooter = () => {
  return (
    <div className='px-[16px] lg:px-[48px] xl:px-[200px]    py-10  '>
            <div className=' lg:flex justify-between mb-10'>
                   <div className='flex flex-col gap-3'>
                          <div><img src="./Layer_1.svg" alt="" /></div>
                          <div>
                                <p className='text-lg font-bold  lg:text-2xl'>Address</p>
                                <p className='text-sm lg:text-base'>Level 1, 123 Sample Street, Sydney NSW 2000</p>
                                
                          </div>
                          <div>
                                <p className='text-lg font-bold lg:text-2xl'>Contact</p>
                                <a href="http://">1800 123 4567</a> <br />
                                <a href="http://">info@screenshiksha.com</a>
                          </div>

                          <div className='flex gap-2'>
                                <Facebook strokeWidth={1.5} />  
                                <Instagram strokeWidth={1.5} />
                                <Twitter strokeWidth={1.5} />
                                <Linkedin strokeWidth={1.5} />
                                <Youtube strokeWidth={1.5} />
                          </div>
                   </div>

                   <div className='lg:flex mt-5 gap-5'>
                      <div className='mt-2'>
                        <p>Learn More</p>
                        <p>Learn More</p>
                        <p>Learn More</p>
                        <p>Learn More</p>
                        <p>Learn More</p>
                      </div>
                      <div className='mt-2'>
                        <p>Learn More</p>
                        <p>Learn More</p>
                        <p>Learn More</p>
                        <p>Learn More</p>
                        <p>Learn More</p>
                      </div>
                   </div>
            </div>

            <hr />
    </div>
  )
}

export default Herofooter