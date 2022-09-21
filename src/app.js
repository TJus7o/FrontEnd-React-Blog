import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home'
import ArticlePage from './components/pages/article-page'
import AuthorPage from './components/pages/author-page'


function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/articlePage' element={<ArticlePage/>} />
    <Route path='/authorPage' element={<AuthorPage/>} />
    </Routes>
    </Router>
    </>
  )
}

export default App;
