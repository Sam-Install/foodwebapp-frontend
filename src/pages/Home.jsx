import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Categories from '../component/Categories'
import TopDishes from '../component/TopDishes'

const Home = () => {
  return (
    <div className='relative'>
        <Navbar/>
        <Hero/>
        <Categories/>
        <TopDishes/>
    </div>
  )
}

export default Home