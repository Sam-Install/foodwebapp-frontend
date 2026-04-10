import React, { useState } from 'react'
import f1 from '../assets/food_1.png'
import f2 from '../assets/food_2.png'
import f3 from '../assets/food_3.png'
import f4 from '../assets/food_4.png'
import f5 from '../assets/food_5.png'
import f6 from '../assets/food_6.png'
import f7 from '../assets/food_7.png'
import f8 from '../assets/food_8.png'

const dishes = [
  {
    id: 1, image: f1,
    title: 'Garden Fresh Salad',
    description: 'Crispy greens, cherry tomatoes, cucumber and house vinaigrette.',
    price: 450,
    category: 'Salad',
  },
  {
    id: 2, image: f2,
    title: 'Chicken Kati Roll',
    description: 'Spiced grilled chicken wrapped in a soft flaky paratha with mint chutney.',
    price: 620,
    category: 'Rolls',
  },
  {
    id: 3, image: f3,
    title: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a gooey molten centre, served with vanilla cream.',
    price: 580,
    category: 'Dessert',
  },
  {
    id: 4, image: f4,
    title: 'Club Sandwich',
    description: 'Triple-decker toasted sandwich with chicken, egg, lettuce and tomato.',
    price: 530,
    category: 'Sandwich',
  },
  {
    id: 5, image: f5,
    title: 'Red Velvet Cake',
    description: 'Moist red velvet layers with cream cheese frosting and a hint of cocoa.',
    price: 700,
    category: 'Cake',
  },
  {
    id: 6, image: f6,
    title: 'Pure Veg Thali',
    description: 'A wholesome platter of dal, sabzi, rice, roti, salad and pickle.',
    price: 490,
    category: 'Pure Veg',
  },
  {
    id: 7, image: f7,
    title: 'Creamy Pasta',
    description: 'Penne in a rich roasted tomato and basil cream sauce with parmesan.',
    price: 650,
    category: 'Pasta',
  },
  {
    id: 8, image: f8,
    title: 'Stir Fry Noodles',
    description: 'Wok-tossed egg noodles with fresh vegetables and a savory soy glaze.',
    price: 560,
    category: 'Noodles',
  },
]

const TopDishes = () => {
  const [counts, setCounts] = useState({})

  const increase = (id) => setCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))

  const decrease = (id) => setCounts((prev) => {
    const current = prev[id] || 0
    if (current <= 1) {
      const updated = { ...prev }
      delete updated[id]
      return updated
    }
    return { ...prev, [id]: current - 1 }
  })

  return (
    <div className='pt-10 pb-16 px-4 sm:px-8 md:px-16 lg:px-24'>

      <h1 className='text-2xl font-bold text-gray-900 text-center'>Top Dishes Near You</h1>
      <p className='text-center text-gray-500 mt-1 mb-8'>Our most loved plates, ordered again and again.</p>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5'>
        {dishes.map((dish) => {
          const count = counts[dish.id] || 0

          return (
            <div
              key={dish.id}
              className='bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col'
            >
              {/* Image */}
              <div className='relative w-full h-40 overflow-hidden'>
                <img
                  src={dish.image}
                  alt={dish.title}
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                />
                <span className='absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full'
                  style={{ background: '#fff7ed', color: '#c2410c' }}>
                  {dish.category}
                </span>
              </div>

              {/* Body */}
              <div className='p-3 flex flex-col flex-1 gap-1'>
                <h3 className='font-semibold text-gray-900 text-sm leading-snug'>{dish.title}</h3>
                <p className='text-xs text-gray-500 leading-relaxed flex-1'>{dish.description}</p>

                {/* Price + controls */}
                <div className='flex items-center justify-between mt-3'>
                  <span className='font-bold text-gray-900 text-sm'>
                    KSh <span style={{ color: '#f97316' }}>{dish.price.toLocaleString()}</span>
                  </span>

                  {count === 0 ? (
                    /* Plain + button when nothing added yet */
                    <button
                      onClick={() => increase(dish.id)}
                      className='w-8 h-8 rounded-full flex items-center justify-center text-white text-xl font-bold transition-transform hover:scale-110 active:scale-95'
                      style={{ background: '#f97316' }}
                      title='Add to cart'
                    >
                      +
                    </button>
                  ) : (
                    /* − count + row once added */
                    <div className='flex items-center gap-1.5'>
                      <button
                        onClick={() => decrease(dish.id)}
                        className='w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-base transition-transform hover:scale-110 active:scale-95'
                        style={{ background: '#f97316' }}
                      >
                        −
                      </button>
                      <span className='text-sm font-bold text-gray-900 min-w-[14px] text-center'>
                        {count}
                      </span>
                      <button
                        onClick={() => increase(dish.id)}
                        className='w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-base transition-transform hover:scale-110 active:scale-95'
                        style={{ background: '#f97316' }}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TopDishes