import React from 'react'
import Home from './components/Home/Home.jsx'
import Hero from './components/Hero/Hero.jsx'
import Info from './components/Info/Info.jsx'
import Story from './components/Story/Story.jsx'
import Galery from './components/Galeri/Galery.jsx'
import Footer from './components/Footer/Footer.jsx'
import "remixicon/fonts/remixicon.css";
export default function App() {

  return (
    <div>
      <Hero />
      <Home />
      <Info />
      <Story />
      <Galery />
      <Footer />
    </div>
  )
}
