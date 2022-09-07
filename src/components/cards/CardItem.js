import React from 'react';
import { Link } from 'react-router-dom';
import { LoremIpsum } from 'react-lorem-ipsum';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Blog Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'><LoremIpsum avgWordsPerSentence={1} p={1} /></h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;