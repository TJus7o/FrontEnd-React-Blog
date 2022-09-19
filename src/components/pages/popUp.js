import React from 'react'
import './popUp.css'

function popUp(props) {
  return (props.trigger) ? (
    <div className='container-popup' >
        <form className='popup-inner'>
        <div class="banner-newsletter">
      <img src="/src/assets/mini.jpg" alt="logo" width="100" height="150"/>
    </div>
        <div className='info'>
            <h1>NEWSLETTER</h1>
            <h3>Enroll for our FREE updates</h3>
            <li>Well send you periodic updates</li>
            <li>Dont worry, its not the least bit annoying</li>
            <br></br>
            <div className='labels'>
            <label >Name:</label>
            <br></br>
            <input  
                type='text'
            />
            <div>
             <label>Email:</label>
            <br></br>
            <input  
                type='email'
            />
            </div>
            </div>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            <div className='checkbox'>
              <input
               id='checkBox' type='checkbox' 
              />
              <label
               for='checkBox'>I accept these terms.
              </label>
              <div>
              <button className='btn-subscribe'>Subscribe!</button>
              
              </div>
            </div>
            </div>
        </form>
        
    </div>
  ) : ''
}

export default popUp