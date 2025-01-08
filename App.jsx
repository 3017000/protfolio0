import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Servicess from './Components/Servicess/Service'
import Mywork from './Components/MyWork/Mywork'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Servicess/>
      <Mywork/>
      <Contact/>
    </div>
  )
}

export default App
