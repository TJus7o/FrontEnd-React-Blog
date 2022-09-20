import { color } from '@mui/system'
import React from 'react'
import './popUp.css'
import Image1 from '../../assets/envelope.png'
import Image2 from '../../assets/mini.jpg'

function popUp(props) {
  return (props.trigger) ? (
    <div className='container-popup' >
        <form className='popup-inner row'>
        <div class="banner-newsletter col-1">
        <img src={Image2} alt="logo" width="80" height="80"/>
        <div className='envelope'>
      <img src={Image1} alt="logo" width="400" height="400"/>
      </div>
    </div>
        <div className='info col-2'>
            <h1>NEWSLETTER</h1>
            <h3>Enroll for our FREE updates</h3>
            <li>Well send you periodic updates</li>
            <li>Dont worry, its not the least bit annoying</li>
            <br></br>
            <div className='labels'>
            <input 
                type='text' name='' required='' placeholder='Name' 
            />
            <div>
            <br></br>
            <input  
                type='email' name='' required='' placeholder='Email Address'
            />
            </div>
            </div>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            <br></br>
            <div className='terms'>
            <p>Terms available <a href='/'>here.</a></p>
            </div>
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