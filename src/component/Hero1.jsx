import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/header_img.png'

const Hero1 = () => {
  return (
    <div className='relative w-full overflow-hidden' style={{ minHeight: '70vh' }}>

      {/* BG Image */}
      <img
        src={heroImg}
        alt='Our Menu'
        className='absolute inset-0 w-full h-full object-cover'
      />

      {/* Overlay — heavier at bottom for text legibility */}
      <div
        className='absolute inset-0'
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.82) 100%)',
        }}
      />

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-end text-center h-full pb-16 pt-40 px-6 sm:px-16 lg:px-32'
        style={{ minHeight: '70vh' }}>

        {/* Badge */}
        <span
          className='inline-block mb-5 text-xs font-bold tracking-widest uppercase px-5 py-1.5 rounded-full'
          style={{ background: '#f97316', color: '#fff', letterSpacing: '0.15em' }}
        >
          PabloEats Menu
        </span>

        {/* H1 */}
        <h1
          className='text-white font-extrabold leading-none mb-4'
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', letterSpacing: '-0.02em' }}
        >
          Every Bite Tells a{' '}
          <span style={{ color: '#f97316' }}>Story.</span>
        </h1>

        {/* H2 */}
        <h2
          className='font-medium mb-5 max-w-2xl'
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.35rem)', color: '#fed7aa', lineHeight: 1.5 }}
        >
          Handcrafted dishes made with passion — from street classics to gourmet delights.
        </h2>

        {/* Divider line */}
        <div className='w-16 h-0.5 rounded-full mb-5' style={{ background: '#f97316' }} />

        {/* P */}
        <p
          className='max-w-xl leading-relaxed mb-10'
          style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1rem)', color: '#d1d5db', lineHeight: 1.8 }}
        >
          Browse our full menu and discover flavors that satisfy every craving.
          Fresh ingredients, bold spices, and unmatched quality — that's the PabloEats promise.
          Whether you're here for a quick bite or a full feast, we've got something for everyone.
        </p>

        {/* Buttons */}
        <div className='flex flex-wrap gap-4 justify-center'>
          <Link to='/menu'>
            <button
              className='px-8 py-3.5 rounded-full font-bold text-white text-sm tracking-wide transition-transform hover:scale-105 active:scale-95'
              style={{ background: '#f97316', border: 'none' }}
            >
              Explore the Menu
            </button>
          </Link>
          <Link to='/'>
            <button
              className='px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-transform hover:scale-105 active:scale-95'
              style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.6)', color: '#fff' }}
            >
              Back to Home
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Hero1