import React from 'react'
import {Mail ,PhoneCall ,MapPin} from "lucide-react"
const Heroten = () => {
  return (
    <div className='px-[16px]  lg:px-[48px]  xl:px-[200px] lg:p-10 mt-10  bg-white'>
          <div className='flex flex-col items-center gap-1'>
              <p className=' text-sm font-semibold'>Connect</p>
              <p className=' text-2xl font-bold lg:text-4xl'>Contact Us</p>
              <p className=' text-xs lg:text-base'>Have any questions? Feel free to reach out to us.</p>
          </div>

          <div className=' lg:flex justify-between'>
                <div>
                    <div className='flex flex-col gap-2 mt-5'>
                       <Mail strokeWidth={3} />
                       <p className=' text-lg font-bold lg:text-2xl'>Phone</p>
                       <p className='text-base font-semibold lg:text-xl'>Give us a Call</p>
                       <a href="http://">+1 (555) 123-4567</a> 
                    </div>
                    
                    <div className='flex flex-col gap-2 mt-5'>
                       <PhoneCall strokeWidth={3} />
                       <p className=' text-lg font-bold lg:text-2xl'>Email</p>
                       <p className='text-base font-semibold lg:text-xl'>Send us an email</p>
                       <a href="http://">info@screenshiksha.com</a> 
                    </div>

                    <div className='flex flex-col gap-2 mt-5'>
                       <MapPin strokeWidth={3} />
                       <p className=' text-lg font-bold lg:text-2xl'>Office</p>
                       <div>
                           <p className='text-base font-semibold lg:text-xl'>Address</p>
                           <a href="http://">Level 1, 123 Sample Street, Sydney NSW 2000</a> 
                        </div> 
                    </div>
                </div>


                <div className='mt-5 bg-gray-100'>
                    <img width={500} src="https://s3-alpha-sig.figma.com/img/8a3c/f1b0/faf5f4e274a974e60eb86f3f09e22bdc?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oLLdFtLSh8wQmbPW6go5sufB4y~sRzIHz8uCOsyTN~vA1dAUCLWOLOHZJ4RlXbT1lRvjnxMsqxqPxIW6tj4JbELaSfzYv9HlXDdAyiyN0~qSc7FqwPH5kDn7QH6jXJ5Y193A2jutWoRIf6JS43g2pKLhofcKUH~35wj0WyLdhNSSwPCHKKWphve1pe37hbBhxT9jGWD9YhtRnEm55rwXIBbn8XTxTSWGZc0WTPh7VBVxnrXURm5kBv2TxfmmwA8YGbdEflBe2VIxr8EUVfDw-r57zewD00REvdgyUE7-s0EqLfB9eijtZI5aMfBO-dJQEvDmuq~noN1qBWZz7N~Etg__" alt="" />
                </div>
          </div>
    </div>
  )
}

export default Heroten