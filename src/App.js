import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/nav/Nav'
import Content from './components/content/Content'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <Nav />
      <Content />
      <Footer />
    </div>
  )
}

export default App
