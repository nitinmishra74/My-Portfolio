import './FormStyle.css';
import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name :</label>
            <input type='text'></input>
            <label>Address :</label>
            <input type='text'></input>
            <label>Email :</label>
            <input type='text'></input>
            <label>Contact No :</label>
            <input type='number'></input>
            <label>Message :</label>
            <textarea  rows="6" placeholder='Type your message' />
            <button className='btn'>Submit</button>
        </form>
      
    </div>
  )
}

export default Form
