import './Workstyle.css';


import React from 'react'
import { NavLink } from 'react-router-dom';


const Work = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt='image'/>
        <h2 className='project-title'>{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
                <NavLink to={props.View} className="btn">VIEW</NavLink>
                <NavLink to={props.Source} className="btn">SOURCE</NavLink>
            </div>
        </div>
        </div> 
  )
}

export default Work
