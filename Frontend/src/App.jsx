import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Component/Common/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />   {/* This shows on every page */}

      <Routes>
        {/* Add your routes here */}
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
