import React from 'react';
import CardItem from './cardItem';
import Image1 from '../../assets/logo.png'




import './cards.css';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Image1} alt="/"
              text=''
              label='TAG'
              path='/articlePage'
            />
            <CardItem
              src={Image1} alt="/"
              text=''
              label='TAG'
              path='/articlePage'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Image1} alt="/"
              text=''
              label='TAG'
              path='/articlePage'
            />
            <CardItem
              src={Image1} alt="/"
              text=''
              label='TAG'
              path='/articlePage'
            />
            <CardItem
              src={Image1} alt="/"
              text=''
              label='TAG'
              path='/articlePage'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;