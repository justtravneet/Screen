import React from 'react'

const Herosix = () => {
  return (
    <div  className='conatiner  p-3   lg:p-10 bg-white mt-5  '>
        <div className='flex flex-col text-center gap-2' >
              <p className=' text-base font-semibold lg:text-lg'>Articles</p>
              <h3 className=' text-2xl font-bold lg:text-4xl '>Discover Our Featured Courses</h3>
              <p className='text-xs font-thin lg:text-lg'>Explore our wide range of courses and start learning today.</p>
        </div>

        <div className='flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-20 mt-10'>
               <div className=' flex flex-col gap-3 border-black border-2'>
                <img className=' lg:w-auto' src="https://s3-alpha-sig.figma.com/img/7689/18d8/5b3715bbc1111e43e99337b50fec566b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=azsz~JlU7vabz8P5UHayKIV5hIR173i-sebMjoGdJtdaLGYDH8zcN2ws56gNfEdJqUylnWVICyFSLthlOV-T4tlhqSJ2l9XDqpY037uNEx8HUswUPhqLbnC5sGHYY9wMjYh1Nrko~wJximzOkg3UXW957z82YCCTibFQuRFUEnik3jwoPNKssFpS3u5qMlC6bQ~~hgsmppX11fvYQzrL7WdJdqscsSbpmwXwVdQ7A2nIBgKRoLWqOBVYZhlcWAPByuHTiiXiMCDVAwVPO-EBMzz1OxL4n7-XdwpBblKElyTyHvTGQZ9ecwFycdee~smn9WU-7Y98dbTe5jSE~hkejQ__" alt="" />
                <p className=' pl-2 font-semibold text-xs lg:text-sm'>ALL</p>
                <h2 className='pl-2 text-lg font-bold lg:text-xl'>Master the Art of Web Design</h2>
                <p className='pl-2 text-xs font-thin lg:text-base'>Learn the latest techniques and trends in web design</p>

                <div className='flex gap-2 mb-2'>
                      <div className='pl-2'>
                        <img  className=' rounded-full w-8 h-8 ' src="https://i.pinimg.com/736x/01/e3/14/01e314bea311a73c585c8346f8b9f8e1.jpg" alt="" />
                      </div>
                      <div className=''>
                              <div><p className='text-sm font-bold'>John Doe</p></div>
                              <div><p className=' text-xs font-thin'>11 Jan 2022 . 5min read</p></div>
                      </div>
                </div>
               </div>

               <div className=' flex flex-col gap-3 border-black border-2'>
                <img className=' lg:w-auto' src="https://s3-alpha-sig.figma.com/img/6772/cd9c/2db2270153b04b030eb43eda6e0f0b5b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gTrp5arxSQnKfgcewBloNHdg2kiMj5UBNzOFj1DM3-IahY-hehvTTEAO1Suq9B23FJFx~MaXNIyACsDGEk0ej0C7FMfJcq9kT982CyZXbEmTlrmGtL-NH8DGUzRrV5lWhzzNvMauOtNcqvbehCiN4WSn-tjcxfAjx3~AVcKDmzQd6I1vj4TsFKFokqEkUoTZmWBPwW3ZyN5-aKms2pRxOlSixYh7wbu3kU~sBLlyV5tB4AStx4A28j51mlNyyNjHw0g8cySzfzw4-tXjk8GhF7lSuNAA0nKZc23p7nHo7agbPIBO~5OUvi1Gufqmm8gBmoodU~ucBt7NLgu1sznKvA__" alt="" />
                <p className=' pl-2 font-semibold text-xs lg:text-sm'>ALL</p>
                <h2 className='pl-2 text-lg font-bold lg:text-xl'>Master the Art of Web Development</h2>
                <p className='pl-2 text-xs font-thin lg:text-base'>Learn the skills to build powerful and dynamic websites.</p>

                <div className='flex gap-2  mb-2'>
                      <div className='pl-2'>
                        <img  className=' rounded-full w-8 h-8 ' src="https://i.pinimg.com/736x/01/e3/14/01e314bea311a73c585c8346f8b9f8e1.jpg" alt="" />
                      </div>
                      <div className=''>
                              <div><p className='text-sm font-bold'>John Smith</p></div>
                              <div><p className=' text-xs font-thin'>11 Jan 2022 . 5min read</p></div>
                      </div>
                </div>
               </div>
            
        </div>

        <div className='flex justify-center mt-8'>
                      <button class="bg-white  text-black hover:text-blue-500   w-24 h-10 py-2 px-1 border-black border-2 lg:px-8 lg:w-40">
                        <a href="http://">View all</a>
                       </button>

        </div>


    </div>
  )
}

export default Herosix