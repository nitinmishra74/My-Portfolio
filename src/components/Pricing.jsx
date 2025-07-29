import './Pricingstyle.css';

import React from 'react';
import {Link} from 'react-router-dom';

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className="card-container">
            <div className="card">
                <h3>-TIC-TOC-TOE-</h3>
                <span className='bar'></span>
                <p className='btc'> ₹ 50</p>
                <p>- Responsice Design -</p>
                <p>- Featured -</p>
                <Link to='/contact' className='btn' >PURCHASE</Link>
            </div>
            <div className="card">
                <h3>-Background Changer-</h3>
                <span className='bar'></span>
                <p className='btc'> ₹ 20</p>
                <p>- Responsice Design -</p>
                <p>- Featured -</p>
                <Link to='/contact' className='btn' >PURCHASE</Link>
            </div>
            <div className="card">
                <h3>-PASSWORD GENERATOR-</h3>
                <span className='bar'></span>
                <p className='btc'> ₹ 100</p>
                <p>- Responsice Design -</p>
                <p>- Featured -</p>
                <Link to='/contact' className='btn' >PURCHASE</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Pricing
