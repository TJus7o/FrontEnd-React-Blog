import React from 'react'
import './popUp.css'

function popUp(props) {
  return (props.trigger) ? (
    <div className='container-popup'>
        <form className='popup-inner'>
            <h2>Subscribe</h2>
            <div>
            <label>Name:</label>
            <br></br>
            <input 
                type='text'
            />
            </div>
            <div>
             <label>Email:</label>
            <br></br>
            <input 
                type='email'
            />
            </div>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
        </form>
        
    </div>
  ) : ''
}

export default popUp