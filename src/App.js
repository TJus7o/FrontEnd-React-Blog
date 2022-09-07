import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import ArticlePage from './components/pages/ArticlePage'
function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/About.js' element={<About/>} />
    <Route path='/ArticlePage.js' element={<ArticlePage/>} />
    </Routes>
    </Router>
    </>
  )
}

export default App;
