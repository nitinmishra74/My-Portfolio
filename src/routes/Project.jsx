import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image2 from '../components/Image2'
import Pricing from '../components/Pricing'
import Workkk from '../components/Workkk'


function Project() {
  return (
    <div>
      <Navbar/>
      <Image2 heading="PROJECTS" text="Here is some of my recent projects/works"/>{/*passing heading and text as a props dynamically*/}
      <Workkk/>
      <Footer/>
    </div>
  )
}

export default Project
