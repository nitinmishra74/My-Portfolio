import { Link } from 'react-router-dom';
import './AboutContent.css';

import React from 'react'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who I am ?</h1>
            <p>Im a Front-End devoloper. I create responsive websites for my clients.</p>
            <Link to="./contact" >
            <button className='btn'>Contact</button>
            </Link>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={p2} 
                        className='img' alt='true' />
                    </div>
                    <div className="img-stack bottom">
                        <img src={p3} 
                        className='img' alt='true' />
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
