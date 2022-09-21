import React from 'react'
import ArticleItem from '../articles/article-item'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'

function ArticlePage() {
  return (
    <div>
       <Navbar />
       <ArticleItem />
       <Footer /> 
    </div>
  )
}

export default ArticlePage