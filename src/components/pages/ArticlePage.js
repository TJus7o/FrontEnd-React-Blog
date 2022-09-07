import React from 'react'
import ArticleItem from '../articles/ArticleItem'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

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