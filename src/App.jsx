import { useState } from 'react'
import './App.css'

import Hero from './containers/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Features from './containers/features/Features'
import Testimony from './containers/testimony/testimony';
import Games from './containers/games/Games';
import Footer from './containers/footer/Footer';
import Faq from './containers/faq/Faq'

function App() {
  return (
    <>
      <div className='gradient-bg'>
        <Navbar />
        <Hero />
      </div>
      <Features />
      <Testimony />
      <Games />
      <Faq />
      <Footer />
    </>
  )
}

export default App
