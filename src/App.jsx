import React from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './Login'

function App() {
  

  return (
    <>

     
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App
