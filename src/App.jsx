import { useState } from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Herotwos from './Components/Herotwos'
import Herothrees from './Components/Herothrees'
// import Img from './Components/Img'




function App() {


  return (
   <div className='container mx-auto'>
        
        <Navbar />
        <Hero />
        {/* <Img /> */}
        <Herotwos />
        <Herothrees />
        

   </div>
  )
}

export default App
