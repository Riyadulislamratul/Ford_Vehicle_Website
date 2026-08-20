import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import CustomOrder from './components/CustomOrder'
import PowerDoesMatter from './components/PowerDoesMatter'
import GT from './components/GT'
import Mach1 from './components/Mach1'
import ShelbyGT500 from './components/ShelbyGT500'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <CustomOrder />
      <PowerDoesMatter />
      <GT />
      <Mach1 />
      <ShelbyGT500 />
      <Footer />
    </>
  )
}

export default App