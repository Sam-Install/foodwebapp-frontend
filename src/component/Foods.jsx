import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import f1 from '../assets/food_1.png'
import f2 from '../assets/food_2.png'
import f3 from '../assets/food_3.png'
import f4 from '../assets/food_4.png'
import f5 from '../assets/food_5.png'
import f6 from '../assets/food_6.png'
import f7 from '../assets/food_7.png'
import f8 from '../assets/food_8.png'
import f9 from '../assets/food_9.png'
import f10 from '../assets/food_10.png'
import f11 from '../assets/food_11.png'
import f12 from '../assets/food_12.png'
import f13 from '../assets/food_13.png'
import f14 from '../assets/food_14.png'
import f15 from '../assets/food_15.png'
import f16 from '../assets/food_16.png'
import f17 from '../assets/food_17.png'
import f18 from '../assets/food_18.png'
import f19 from '../assets/food_19.png'
import f20 from '../assets/food_20.png'
import f21 from '../assets/food_21.png'
import f22 from '../assets/food_22.png'
import f23 from '../assets/food_23.png'
import f24 from '../assets/food_24.png'
import f25 from '../assets/food_25.png'
import f26 from '../assets/food_26.png'
import f27 from '../assets/food_27.png'
import f28 from '../assets/food_28.png'
import f29 from '../assets/food_29.png'
import f30 from '../assets/food_30.png'
import f31 from '../assets/food_31.png'
import f32 from '../assets/food_32.png'

const allFoods = [
  { id: 1,  image: f1,  title: 'Garden Fresh Salad',    category: 'Salad',    price: 450, description: 'Crispy greens, cherry tomatoes, cucumber and house vinaigrette.' },
  { id: 2,  image: f2,  title: 'Caesar Salad',          category: 'Salad',    price: 490, description: 'Romaine, parmesan, croutons and creamy caesar dressing.' },
  { id: 3,  image: f3,  title: 'Greek Salad',           category: 'Salad',    price: 520, description: 'Olives, feta, tomatoes and cucumbers in olive oil.' },
  { id: 4,  image: f4,  title: 'Chicken Kati Roll',     category: 'Rolls',    price: 620, description: 'Spiced grilled chicken wrapped in a soft flaky paratha.' },
  { id: 5,  image: f5,  title: 'Paneer Tikka Roll',     category: 'Rolls',    price: 580, description: 'Chargrilled paneer with peppers in a whole wheat wrap.' },
  { id: 6,  image: f6,  title: 'Veggie Spring Roll',    category: 'Rolls',    price: 430, description: 'Crispy fried rolls stuffed with spiced mixed vegetables.' },
  { id: 7,  image: f7,  title: 'Chocolate Lava Cake',   category: 'Dessert',  price: 580, description: 'Warm chocolate cake with a gooey molten centre.' },
  { id: 8,  image: f8,  title: 'Mango Panna Cotta',     category: 'Dessert',  price: 520, description: 'Silky Italian cream dessert with fresh mango coulis.' },
  { id: 9,  image: f9,  title: 'Gulab Jamun',           category: 'Dessert',  price: 380, description: 'Soft milk dumplings soaked in rose-flavored sugar syrup.' },
  { id: 10, image: f10, title: 'Club Sandwich',         category: 'Sandwich', price: 530, description: 'Triple-decker with chicken, egg, lettuce and tomato.' },
  { id: 11, image: f11, title: 'Grilled Veggie Sub',    category: 'Sandwich', price: 490, description: 'Ciabatta loaded with grilled zucchini, peppers and pesto.' },
  { id: 12, image: f12, title: 'BBQ Chicken Burger',    category: 'Sandwich', price: 650, description: 'Juicy chicken patty with smoky BBQ sauce and slaw.' },
  { id: 13, image: f13, title: 'Red Velvet Cake',       category: 'Cake',     price: 700, description: 'Moist red velvet layers with cream cheese frosting.' },
  { id: 14, image: f14, title: 'Black Forest Cake',     category: 'Cake',     price: 750, description: 'Chocolate sponge with cherries and whipped cream.' },
  { id: 15, image: f15, title: 'Lemon Drizzle Cake',    category: 'Cake',     price: 680, description: 'Light sponge soaked in zesty lemon syrup with a crunchy top.' },
  { id: 16, image: f16, title: 'Pure Veg Thali',        category: 'Pure Veg', price: 490, description: 'Dal, sabzi, rice, roti, salad and pickle on one platter.' },
  { id: 17, image: f17, title: 'Palak Paneer',          category: 'Pure Veg', price: 540, description: 'Cottage cheese in a smooth spiced spinach gravy.' },
  { id: 18, image: f18, title: 'Dal Makhani',           category: 'Pure Veg', price: 510, description: 'Slow-cooked black lentils in a rich buttery tomato sauce.' },
  { id: 19, image: f19, title: 'Creamy Pasta',          category: 'Pasta',    price: 650, description: 'Penne in rich roasted tomato and basil cream sauce.' },
  { id: 20, image: f20, title: 'Spaghetti Bolognese',   category: 'Pasta',    price: 720, description: 'Classic slow-cooked meat ragu on al dente spaghetti.' },
  { id: 21, image: f21, title: 'Pesto Fusilli',         category: 'Pasta',    price: 680, description: 'Spiral pasta tossed in fresh basil pesto with pine nuts.' },
  { id: 22, image: f22, title: 'Mac & Cheese',          category: 'Pasta',    price: 590, description: 'Elbow pasta in a four-cheese sauce, baked golden on top.' },
  { id: 23, image: f23, title: 'Stir Fry Noodles',      category: 'Noodles',  price: 560, description: 'Wok-tossed egg noodles with vegetables and soy glaze.' },
  { id: 24, image: f24, title: 'Ramen Bowl',            category: 'Noodles',  price: 780, description: 'Rich tonkotsu broth with noodles, egg and nori.' },
  { id: 25, image: f25, title: 'Pad Thai',              category: 'Noodles',  price: 720, description: 'Rice noodles stir-fried with tamarind, peanuts and lime.' },
  { id: 26, image: f26, title: 'Hakka Noodles',         category: 'Noodles',  price: 590, description: 'Indo-Chinese wok noodles with peppers and spring onion.' },
  { id: 27, image: f27, title: 'Avocado Salad',         category: 'Salad',    price: 550, description: 'Sliced avocado, arugula, sunflower seeds and lemon dressing.' },
  { id: 28, image: f28, title: 'Egg Rolls',             category: 'Rolls',    price: 460, description: 'Crispy rolls with a spiced egg and onion filling.' },
  { id: 29, image: f29, title: 'Strawberry Cheesecake', category: 'Dessert',  price: 640, description: 'Creamy baked cheesecake with a fresh strawberry topping.' },
  { id: 30, image: f30, title: 'BLT Sandwich',          category: 'Sandwich', price: 500, description: 'Bacon, lettuce and tomato on toasted sourdough with mayo.' },
  { id: 31, image: f31, title: 'Carrot Cake',           category: 'Cake',     price: 660, description: 'Spiced carrot cake with walnuts and cream cheese icing.' },
  { id: 32, image: f32, title: 'Chana Masala',          category: 'Pure Veg', price: 470, description: 'Hearty chickpea curry in a tangy tomato-onion gravy.' },
]

const categoryList = ['All', 'Salad', 'Rolls', 'Dessert', 'Sandwich', 'Cake', 'Pure Veg', 'Pasta', 'Noodles']

const Foods = ({ defaultCategory = 'All' }) => {
  const [active, setActive] = useState(defaultCategory)
  const { cart, addToCart, decrease } = useCart()

  const filtered = active === 'All' ? allFoods : allFoods.filter((f) => f.category === active)

  return (
    <div className='pt-10 pb-16 px-4 sm:px-8 md:px-16 lg:px-24'>

      {/* Filter tabs */}
      <div className='flex gap-2 flex-wrap justify-center mb-8'>
        {categoryList.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className='px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200'
            style={{
              background: active === cat ? '#f97316' : 'transparent',
              color: active === cat ? '#fff' : '#6b7280',
              borderColor: active === cat ? '#f97316' : '#d1d5db',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5'>
        {filtered.map((dish) => {
          const count = cart.find((item) => item.id === dish.id)?.count || 0
          return (
            <div
              key={dish.id}
              className='bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col'
            >
              <div className='relative w-full h-40 overflow-hidden'>
                <img
                  src={dish.image}
                  alt={dish.title}
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                />
                <span
                  className='absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full'
                  style={{ background: '#fff7ed', color: '#c2410c' }}
                >
                  {dish.category}
                </span>
              </div>

              <div className='p-3 flex flex-col flex-1 gap-1'>
                <h3 className='font-semibold text-gray-900 text-sm leading-snug'>{dish.title}</h3>
                <p className='text-xs text-gray-500 leading-relaxed flex-1'>{dish.description}</p>

                <div className='flex items-center justify-between mt-3'>
                  <span className='font-bold text-gray-900 text-sm'>
                    KSh <span style={{ color: '#f97316' }}>{dish.price.toLocaleString()}</span>
                  </span>

                  {count === 0 ? (
                    <button
                      onClick={() => addToCart(dish)}
                      className='w-8 h-8 rounded-full flex items-center justify-center text-white text-xl font-bold transition-transform hover:scale-110 active:scale-95'
                      style={{ background: '#f97316' }}
                    >
                      +
                    </button>
                  ) : (
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
                        onClick={() => addToCart(dish)}
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

export default Foods