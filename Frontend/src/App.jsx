import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Component/Common/Header'
import Footer from './Component/Common/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />   {/* This shows on every page */}
        <main className="flex-1">
          <Routes>
    
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
