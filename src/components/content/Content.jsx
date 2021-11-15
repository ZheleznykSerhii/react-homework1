import React from 'react'
import HomePageContent from './content-pages/ContentHome'
import Catalog from './content-pages/catalogpage/CatalogPage'
import './content.css'
import { Routes, Route } from 'react-router-dom'

const Content = () => {
  // тут буде багато різних компонент, коли проект буде розширюватись
  // return <HomePageContent />
  return (
    <Routes>
      <Route path="/home" element={<HomePageContent />} />
      <Route path="/catalog" element={<Catalog />} />
    </Routes>
  )
}

export default Content
