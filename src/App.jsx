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
import AdminLogin from './pages/AdminLogin'
import UserLogin from './pages/UserLogin'
import Register from './pages/Register'

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
        <Route path='/admin' element={<AdminLogin/>} />
        <Route path='/user' element={<UserLogin/>} />
        <Route path='/register' element={<Register/>} />


        
      </Routes>
      <ToastContainer position='top right'/>
      <Footer/>
    </div>
    
  )
}

export default App