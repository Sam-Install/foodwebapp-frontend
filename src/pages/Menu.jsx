import React from 'react'
import Hero1 from '../component/Hero1'
import Foods from '../component/Foods'
import { useSearchParams } from 'react-router-dom'

const Menu = () => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') || 'All'

  return (
    <div>
      <Hero1/>
      <Foods defaultCategory={category}/>
    </div>
  )
}

export default Menu