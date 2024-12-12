import './Workstyle.css';


import React from 'react'
import Workkcarddata from './Workkcarddata'
import Work from './Work'


const Workkk = () => {
  return (
    <div className='work-container' >
        <h1 className="project-heading">Projects</h1>
     <div className="project-container">
      {Workkcarddata.map((val,ind)=>{
        return(
          <Work
          key={ind}
          imgsrc={val.imgsrc}
          title={val.title}
          text={val.text}
          View={val.View}
          Source={val.Source}
          />
        )
      })}
      </div> 
       
    </div>
  )
}

export default Workkk
