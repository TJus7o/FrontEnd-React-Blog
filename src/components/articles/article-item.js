import React from 'react'
import { Link } from 'react-router-dom';
import Image1 from '../../assets/ambiente.jpg'
import CardItem from '../cards/card-item';

import '../cards/cards.css'
import './article.css'

function ArticleItem() {
  return (
    <div className='container'>
    <div className="post">
    <img
      className="postImg"
      src={Image1}
      alt=""
    />
    <div className="postInfo">
      <div className="postCats">
        <span className="postCat">
          <Link className="link" to="/authorPage">
            Author
          </Link>
        </span>
        <span className="postCat">
          <Link className="link" to="/">
            FrontEnd
          </Link>
        </span>
      </div>
      <h2 className="postTitle">
          Lorem ipsum dolor sit amet 
      </h2>
      <hr />
      <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
      fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
      atque, exercitationem quibusdam, reiciendis odio laboriosam?
    </p>
  </div>
<h3>READ MORE?</h3>
    <aside className='read-more-wrap outer'>
        <div className='read-more inner'>
        <ul className='cards__items'>
            <CardItem
              src={Image1} alt="/"
              text=''
              label='TAG'
              path='/'
            />
            <CardItem
              src={Image1} alt="/"
              text=''
              label='TAG'
              path='/'
            />
            <CardItem
              src={Image1} alt="/"
              text=''
              label='TAG'
              path='/'
            />
          </ul>
        </div>
    </aside>

  </div>
  )
}

export default ArticleItem