import React from 'react'
import Themetoggle from '../components/Themetoggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import Skillssection from '../components/Skillssection'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* theme toggle */}
        <Themetoggle/>


        {/* Background efffects stars  */}
        <StarBackground/>


        {/* Navbar */}
        <Navbar/>


        {/* Main content */}
        <main>
          <HeroSection/>
          <AboutSection/>
          <Skillssection/>
          <Contact/>
        </main>



        {/* Footer */}
        <Footer/>
      
    </div>
  )
}

export default Home
