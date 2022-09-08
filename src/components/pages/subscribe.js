import React from 'react'
import mini from '../../assets/mini.jpg'

import '../pages/subscribe.css'

function subscribe() {

  return (
    <section>
    <div className="container">
        <div className="register">
           
            
            <form id='form' className='flex flex-col'>
            <h2>Subscribe</h2>
                <input type="name" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <button className='btn'>Subscribe</button>
                <img src={mini} alt="/"></img>
            </form>

        </div>
        
    </div>
</section>
  )
}

export default subscribe