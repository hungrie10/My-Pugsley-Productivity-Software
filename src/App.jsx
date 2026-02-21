import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login'
import Workspace from './pages/Workspace'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/workspace" element={<Workspace />} />
      </Routes>
    </>
  )
}

export default App
