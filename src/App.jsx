import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { Divider } from "@mui/material"
import Header from './components/header'
import './App.css'

import Home from './pages/Home'
import Inventory from './pages/Inventory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Divider />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inventory' element={<Inventory />} />
      </Routes>
    </>
  )
}

export default App
