import React from 'react'
import { Routes, Route } from 'react-router'
import HeaderText from './HeaderText'

const Header = () => {
  return (
    <Routes>
      <Route path="/login" element={<HeaderText text="Home Page" />} />
      <Route path="/catalog" element={<HeaderText text="Catalog Page" />} />
      <Route path="/cart" element={<HeaderText text="Cart Page" />} />
    </Routes>
  )
}

export default Header
