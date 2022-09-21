import React from 'react'
import Image1 from '../../assets/borat.jpg'
import { LoremIpsum } from 'react-lorem-ipsum';

import './author-item.css'

function AuthorItem() {
  return (
    <div className='container'>
  
        <h1>About the Author</h1>
        <figure className='author_photo'>
        <img 
        src={Image1} width='100%'>
        </img>
        </figure>

        <div className='text_desc'>
  <p><LoremIpsum avgWordsPerSentence={10} p={1} /></p>
</div>
        
    </div>
  )
}

export default AuthorItem