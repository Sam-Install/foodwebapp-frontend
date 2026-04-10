import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import f2 from '../assets/food_2.png'
import f8 from '../assets/food_8.png'
import f26 from '../assets/food_26.png'

const slides = [
  { image: f2, accent: '#f97316' },
  { image: f8, accent: '#ea580c' },
  { image: f26, accent: '#f97316' },
]

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = (next) => {
    setAnimating(true)
    setTimeout(() => {
      setCurrent(next)
      setAnimating(false)
    }, 400)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length
        setAnimating(true)
        setTimeout(() => setAnimating(false), 400)
        return next
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className='relative w-full h-[90vh] min-h-[500px] overflow-hidden'>

      {slides.map((slide, i) => (
        <div
          key={i}
          className='absolute inset-0 transition-opacity duration-700'
          style={{ opacity: current === i ? 1 : 0, zIndex: current === i ? 1 : 0 }}
        >
          <img src={slide.image} alt={`slide ${i + 1}`} className='w-full h-full object-cover' />
          <div className='absolute inset-0 bg-black/55' />
        </div>
      ))}

      {/* Content — centered */}
      <div
        className='absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 sm:px-16 lg:px-24'
        style={{ transition: 'opacity 0.4s ease', opacity: animating ? 0 : 1 }}
      >
      

        <h1 className='text-white font-extrabold leading-tight mb-2 max-w-3xl'
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          Taste the Flavor.{' '}
          <span style={{ color: '#f97316' }}>Feel the Experience.</span>
        </h1>

        <h2 className='font-semibold mb-1 max-w-2xl'
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: '#fed7aa' }}>
          Freshly made meals crafted to satisfy every craving.
        </h2>

        <h3 className='font-medium mb-4'
          style={{ fontSize: 'clamp(0.875rem, 2vw, 1.1rem)', color: '#fdba74' }}>
          Fast delivery. Premium quality. Unmatched taste.
        </h3>

        <p className='max-w-xl mb-8 leading-relaxed'
          style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', color: '#e5e7eb' }}>
          From sizzling street flavors to gourmet bites, PabloEats brings you food
          that hits different — every single time.
        </p>

        <div className='flex flex-wrap gap-4 justify-center'>
          <Link to='/menu'>
            <button className='px-7 py-3 rounded-full font-bold text-white text-sm tracking-wide transition-transform hover:scale-105 active:scale-95'
              style={{ background: '#f97316', border: 'none' }}>
              Order Now
            </button>
          </Link>
          <Link to='/about'>
            <button className='px-7 py-3 rounded-full font-bold text-sm tracking-wide transition-transform hover:scale-105 active:scale-95'
              style={{ background: 'transparent', border: '2px solid #fff', color: '#fff' }}>
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Dots */}
      <div className='absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2'>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className='rounded-full transition-all duration-300'
            style={{
              width: current === i ? '28px' : '10px',
              height: '10px',
              background: current === i ? '#f97316' : 'rgba(255,255,255,0.5)',
              border: 'none', cursor: 'pointer', padding: 0,
            }} />
        ))}
      </div>

      {/* Arrows */}
      <button onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className='absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110'
        style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', fontSize: '18px' }}>
        ‹
      </button>
      <button onClick={() => goTo((current + 1) % slides.length)}
        className='absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110'
        style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', fontSize: '18px' }}>
        ›
      </button>

    </div>
  )
}

export default Hero