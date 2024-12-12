import './Footerstyle.css';
import React from 'react'
import {FaInstagram, FaHome,  FaLinkedin, FaMailBulk,FaPhone, FaTwitter} from 'react-icons/fa'

function Footer () {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: "#fff", marginRight: '2rem'}}/>
                    <div>
                        <p>Bedauli,Sirsa,Mejaroad. </p>
                        <p>Prayagraj ,India</p>
                    </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{color: "#fff", marginRight: '2rem'}}/>
                        +91 9555889742
                        </h4>
                    </div>
                    
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: '2rem'}}/>
                        fabulouspanda36@gmail.com
                        </h4>
                    </div> 
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>I'M Nitin Mishra from India, Prayagraj.
                    
                </p>
                <div className='social'>
                <a 
        href="https://www.instagram.com/the_nitinmishra" // Replace with your Instagram profile link
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Provides security benefits
        style={{ textDecoration: 'none' }} // Optional: Prevents underlines
      >
        <FaInstagram size={30} style={{ color: "#fff", marginRight: '1rem' }} />
      </a>
      <a 
        href="https://www.linkedin.com/in/nitin-mishra-94732b292/" // Replace with your Instagram profile link
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Provides security benefits
        style={{ textDecoration: 'none' }} // Optional: Prevents underlines
      >
        <FaLinkedin size={30} style={{ color: "#fff", marginRight: '1rem' }} />
      </a>
      <a 
        href="https://x.com/NitinMishr55399?t=0iNB5NdngaMNNMfgIYCEow&s=08 " // Replace with your Instagram profile link
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Provides security benefits
        style={{ textDecoration: 'none' }} // Optional: Prevents underlines
      >
        <FaTwitter size={30} style={{ color: "#fff", marginRight: '1rem' }} />
      </a>
                
                
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
