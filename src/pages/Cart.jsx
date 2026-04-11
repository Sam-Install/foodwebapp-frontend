import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import AuthPromptModal from '../component/AuthPromptModal'

const Cart = () => {
  const { cart, addToCart, decrease, remove, total } = useCart()
  const navigate = useNavigate()

  const isLoggedIn = false
  const [showAuthModal, setShowAuthModal] = useState(false)

  const handleCheckout = () => {
    if (!isLoggedIn) {
      setShowAuthModal(true)
    } else {
      navigate('/checkout')
    }
  }

  if (cart.length === 0) return (
    <div className='min-h-screen bg-gray-600 flex flex-col items-center justify-center py-32 text-gray-400'>
      <p className='text-6xl mb-4'>🛒</p>
      <p className='text-xl font-semibold'>Your cart is empty</p>
      <p className='text-sm mt-1'>Add some delicious food to get started</p>
    </div>
  )

  return (
    <div className='min-h-screen bg-gray-600 pt-24 pb-16 px-4 sm:px-8 md:px-16 lg:px-24'>
      <h1 className='text-2xl font-bold text-gray-900 mb-8'>Your Cart</h1>

      <div className='flex flex-col lg:flex-row gap-8'>

        {/* Items */}
        <div className='flex-1 flex flex-col gap-4'>
          {cart.map((item) => (
            <div key={item.id} className='flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm'>
              <img src={item.image} alt={item.title} className='w-20 h-20 rounded-xl object-cover flex-shrink-0' />

              <div className='flex-1'>
                <h3 className='font-semibold text-gray-900 text-sm'>{item.title}</h3>
                <p className='text-xs text-gray-500 mt-0.5'>{item.category}</p>
                <p className='text-sm font-bold mt-1' style={{ color: '#f97316' }}>
                  KSh {(item.price * item.count).toLocaleString()}
                </p>
              </div>

              <div className='flex items-center gap-2'>
                <button
                  onClick={() => decrease(item.id)}
                  className='w-7 h-7 rounded-full text-white font-bold flex items-center justify-center'
                  style={{ background: '#f97316' }}
                >−</button>
                <span className='text-sm font-bold w-4 text-center'>{item.count}</span>
                <button
                  onClick={() => addToCart(item)}
                  className='w-7 h-7 rounded-full text-white font-bold flex items-center justify-center'
                  style={{ background: '#f97316' }}
                >+</button>
              </div>

              <button
                onClick={() => remove(item.id)}
                className='text-gray-300 hover:text-red-400 text-xl ml-2'
              >✕</button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className='lg:w-72 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-fit'>
          <h2 className='text-lg font-bold text-gray-900 mb-4'>Order Summary</h2>

          <div className='flex flex-col gap-2 text-sm text-gray-600'>
            {cart.map((item) => (
              <div key={item.id} className='flex justify-between'>
                <span>{item.title} × {item.count}</span>
                <span>KSh {(item.price * item.count).toLocaleString()}</span>
              </div>
            ))}
          </div>

          <div className='border-t border-gray-200 mt-4 pt-4 flex justify-between font-bold text-gray-900'>
            <span>Total</span>
            <span style={{ color: '#f97316' }}>KSh {total.toLocaleString()}</span>
          </div>

          <button
            onClick={handleCheckout}
            className='mt-6 w-full py-3 rounded-full text-white font-semibold text-sm transition-transform hover:scale-105 active:scale-95'
            style={{ background: '#f97316' }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthPromptModal onClose={() => setShowAuthModal(false)} />
      )}

    </div>
  )
}

export default Cart