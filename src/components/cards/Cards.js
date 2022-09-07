import React from 'react';
import CardItem from './CardItem';
import Image1 from '../../assets/logo.png'
import BgImage from '../../assets/bgimage.jpg'


import './Cards.css';

function Cards() {
  return (
    <div className='cards' /*style={{ backgroundImage:`url(${BgImage})` }}*/>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Image1} alt="/"
              text=''
              label='TAG'
              path='/ArticlePage.js'
            />
            <CardItem
              src={Image1} alt="/"
              text=''
              label='TAG'
              path='/ArticlePage.js'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Image1} alt="/"
              text=''
              label='TAG'
              path='/ArticlePage.js'
            />
            <CardItem
              src={Image1} alt="/"
              text=''
              label='TAG'
              path='/ArticlePage.js'
            />
            <CardItem
              src={Image1} alt="/"
              text=''
              label='TAG'
              path='/ArticlePage.js'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;