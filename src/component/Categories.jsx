import React, { useState, useRef } from 'react'
import m1 from '../assets/menu_1.png'
import m2 from '../assets/menu_2.png'
import m3 from '../assets/menu_3.png'
import m4 from '../assets/menu_4.png'
import m5 from '../assets/menu_5.png'
import m6 from '../assets/menu_6.png'
import m7 from '../assets/menu_7.png'
import m8 from '../assets/menu_8.png'

const categories = [
  { id: 1, image: m1, label: 'Salad' },
  { id: 2, image: m2, label: 'Rolls' },
  { id: 3, image: m3, label: 'Dessert' },
  { id: 4, image: m4, label: 'Sandwich' },
  { id: 5, image: m5, label: 'Cake' },
  { id: 6, image: m6, label: 'Pure Veg' },
  { id: 7, image: m7, label: 'Pasta' },
  { id: 8, image: m8, label: 'Noodles' },
]

const Categories = () => {
  const [active, setActive] = useState(null)
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -220 : 220, behavior: 'smooth' })
  }

  return (
    <div className='pt-10 px-4 sm:px-8 md:px-16 lg:px-24'>

      <h1 className='text-center text-2xl font-bold text-gray-900 pt-3'>
        Explore Our Wide Variety Of Foods
      </h1>
      <p className='text-center text-gray-500 mt-1 mb-8'>
        Go Through Our Categories
      </p>

      {/* Slider wrapper */}
      <div className='relative flex items-center'>

        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          className='flex-shrink-0 w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-orange-400 hover:text-orange-500 transition-all z-10 shadow-sm mr-2'
        >
          ‹
        </button>

        {/* Scrollable track — hidden scrollbar */}
        <div
          ref={scrollRef}
          className='flex gap-5 overflow-x-auto scroll-smooth'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActive(active === cat.id ? null : cat.id)}
              className='flex flex-col items-center gap-2 cursor-pointer flex-shrink-0 group'
            >
              <div
                className='w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 transition-all duration-300'
                style={{
                  borderColor: active === cat.id ? '#f97316' : 'transparent',
                  boxShadow: active === cat.id
                    ? '0 0 0 3px #fed7aa'
                    : '0 2px 8px rgba(0,0,0,0.10)',
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                />
              </div>

              <span
                className='text-sm font-medium transition-colors duration-200 whitespace-nowrap'
                style={{ color: active === cat.id ? '#f97316' : '#374151' }}
              >
                {cat.label}
              </span>

              <div
                className='w-1.5 h-1.5 rounded-full transition-all duration-300'
                style={{ background: active === cat.id ? '#f97316' : 'transparent' }}
              />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          className='flex-shrink-0 w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-orange-400 hover:text-orange-500 transition-all z-10 shadow-sm ml-2'
        >
          ›
        </button>
      </div>

      <div className='mt-6 border-b border-gray-200' />
    </div>
  )
}

export default Categories