import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
      <Routes>

        <Route path='' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />


        
      </Routes>
      <ToastContainer position='top right'/>
    </div>
  )
}

export default App