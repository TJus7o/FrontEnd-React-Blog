import React from 'react'
import Image1 from '../../assets/borat.jpg'
import { LoremIpsum } from 'react-lorem-ipsum';

import './authorItem.css'

function authorItem() {
  return (
    <div className='author_about'>
  
        <h1>About the Author</h1>
        <figure className='author_photo'>
        <img 
        src={Image1} width='1000'>
        </img>
        </figure>

        <div className='text_desc'>
  <p><LoremIpsum avgWordsPerSentence={10} p={1} /></p>
</div>
        
    </div>
  )
}

export default authorItem