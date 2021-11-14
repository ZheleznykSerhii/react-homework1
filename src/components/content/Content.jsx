import React from 'react'
import HomePageContent from './content-pages/ContentHome'
import Catalog from './content-pages/catalogpage/CatalogPage'
import './content.css'

const Content = () => {
  // тут буде багато різних компонент, коли проект буде розширюватись
  // return <HomePageContent />
  return <Catalog />
}

export default Content
