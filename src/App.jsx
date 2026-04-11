import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Menu from './pages/Menu'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import About from './pages/About'
import Checkout from './pages/Checkout'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>

        <Route path='' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/checkout' element={<Checkout/>} />


        
      </Routes>
      <ToastContainer position='top right'/>
      <Footer/>
    </div>
    
  )
}

export default App