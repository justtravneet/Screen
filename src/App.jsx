import { useState } from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Herotwos from './Components/Herotwos'
import Herothrees from './Components/Herothrees'
import Herofour from './Components/Herofour'
import Herofive from './Components/Herofive'
import Herosix from './Components/Herosix'
import Heroseven from './Components/Heroseven'
import Heroeight from './Components/Heroeight'
import Heronine from './Components/Heronine'
import Heroten from './Components/Heroten'
import Herofooter from './Components/Herofooter'
import Copyr from './Components/Copyr'
// import Img from './Components/Img'




function App() {


  return (
   <div className='container mx-auto'>
        
        <Navbar />
        <Hero />
        {/* <Img /> */}
        <Herotwos />
        <Herothrees />
        <Herofour />
        <Herofive />
        <Herosix />
        <Heroseven />
        <Heroeight />
        <Heronine />
        <Heroten />
        <Herofooter />
        <Copyr />

   </div>
  )
}

export default App
