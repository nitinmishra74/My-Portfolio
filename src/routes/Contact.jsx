import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image2 from '../components/Image2'
import  Form  from '../components/Form'

function Contact() {
  return (
    <div>
      <Navbar/>
      <Image2 heading="CONTACT" text="Let's Have a Chat!!" />
      <Form />
      <Footer/>
    </div>
  )
}

export default Contact
