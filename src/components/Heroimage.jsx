import './Herostyle.css';

import React from 'react';
import IMG_0735 from "../assets/IMG_0735.JPG";
import {Link} from 'react-router-dom';




function Heroimage() {
  return (
    <div className='hero'>
       <div className="mask"> 
       <img className='into-img'
       src={IMG_0735} alt="Hero" />
    </div>
    <div className="content">
      <p >HI, I'M NITN MISHRA</p>
      <h1>
  <span class="word">FRONT-END</span>
  <span class="word">DEVELOPER.</span>
</h1>



      <div>
        <Link to="/project"
        className='btn'>Projects</Link>
        <Link to="/contact"
        className='btn btn-light'>Contact</Link>
      </div>
    </div>
    </div>
  )
}

export default Heroimage
