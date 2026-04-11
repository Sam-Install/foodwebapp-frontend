import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { FiMapPin, FiPhone, FiUser, FiMail, FiCheckCircle } from 'react-icons/fi'
import { BsCash, BsPhone } from 'react-icons/bs'
import { SiStripe } from 'react-icons/si'

const Checkout = () => {
  const { cart, total, clearCart } = useCart()
  const navigate = useNavigate()

  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', note: '' })
  const [method, setMethod] = useState('cash')
  const [mpesaPhone, setMpesaPhone] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvc, setCardCvc] = useState('')
  const [placing, setPlacing] = useState(false)
  const [done, setDone] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const placeOrder = () => {
    if (!form.name || !form.phone || !form.address) return alert('Please fill in all required fields.')
    if (method === 'mpesa' && !mpesaPhone) return alert('Enter your M-Pesa number.')
    if (method === 'stripe' && (!cardNumber || !cardExpiry || !cardCvc)) return alert('Enter your card details.')

    setPlacing(true)
    setTimeout(() => {
      setPlacing(false)
      setDone(true)
      clearCart()
    }, 2000)
  }

  if (cart.length === 0 && !done) {
    navigate('/cart')
    return null
  }

  if (done) return (
    <div className='min-h-screen bg-gray-50'>
      <div className='h-24 bg-gray-900' />
      <div className='flex flex-col items-center justify-center py-24 text-center px-4'>
        <FiCheckCircle className='text-7xl mb-5' style={{ color: '#f97316' }} />
        <h2 className='text-2xl font-bold text-gray-900 mb-2'>Order Placed!</h2>
        <p className='text-gray-500 text-sm mb-6 max-w-sm'>
          {method === 'cash' && "Pay with cash on delivery. We'll be there soon!"}
          {method === 'mpesa' && `M-Pesa prompt sent to ${mpesaPhone}. Complete payment to confirm.`}
          {method === 'stripe' && 'Payment successful. Your order is on its way!'}
        </p>
        <button
          onClick={() => navigate('/')}
          className='px-8 py-3 rounded-full text-white font-semibold text-sm transition-transform hover:scale-105 active:scale-95'
          style={{ background: '#f97316' }}
        >
          Back to Home
        </button>
      </div>
    </div>
  )

  return (
    <div className='min-h-screen bg-gray-50'>

      {/* Dark band for navbar visibility */}
      <div className='h-24 bg-gray-900' />

      <div className='pb-16 px-4 sm:px-8 md:px-16 lg:px-24 mt-8'>
        <h1 className='text-2xl font-bold text-gray-900 mb-8'>Checkout</h1>

        <div className='flex flex-col lg:flex-row gap-8'>

          {/* Left — delivery + payment */}
          <div className='flex-1 flex flex-col gap-6'>

            {/* Delivery Details */}
            <div className='bg-white border border-gray-100 rounded-2xl p-6 shadow-sm'>
              <h2 className='font-bold text-gray-900 mb-4'>Delivery Details</h2>

              <div className='flex flex-col gap-3'>

                <div className='relative'>
                  <FiUser className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm' />
                  <input
                    name='name' value={form.name} onChange={handle}
                    placeholder='Full Name *'
                    className='w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400'
                  />
                </div>

                <div className='relative'>
                  <FiMail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm' />
                  <input
                    name='email' value={form.email} onChange={handle}
                    placeholder='Email Address'
                    className='w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400'
                  />
                </div>

                <div className='relative'>
                  <FiPhone className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm' />
                  <input
                    name='phone' value={form.phone} onChange={handle}
                    placeholder='Phone Number *'
                    className='w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400'
                  />
                </div>

                <div className='relative'>
                  <FiMapPin className='absolute left-3 top-3.5 text-gray-400 text-sm' />
                  <textarea
                    name='address' value={form.address} onChange={handle}
                    placeholder='Delivery Address *'
                    rows={2}
                    className='w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 resize-none'
                  />
                </div>

                <textarea
                  name='note' value={form.note} onChange={handle}
                  placeholder='Order note (optional)'
                  rows={2}
                  className='w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 resize-none'
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className='bg-white border border-gray-100 rounded-2xl p-6 shadow-sm'>
              <h2 className='font-bold text-gray-900 mb-4'>Payment Method</h2>

              <div className='flex flex-col gap-3'>

                {/* Cash */}
                <div
                  onClick={() => setMethod('cash')}
                  className='flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all'
                  style={{ borderColor: method === 'cash' ? '#f97316' : '#e5e7eb', background: method === 'cash' ? '#fff7ed' : '#fff' }}
                >
                  <BsCash className='text-2xl' style={{ color: '#f97316' }} />
                  <div>
                    <p className='font-semibold text-sm text-gray-900'>Cash on Delivery</p>
                    <p className='text-xs text-gray-500'>Pay when your order arrives</p>
                  </div>
                  <div className='ml-auto w-4 h-4 rounded-full border-2 flex items-center justify-center' style={{ borderColor: '#f97316' }}>
                    {method === 'cash' && <div className='w-2 h-2 rounded-full' style={{ background: '#f97316' }} />}
                  </div>
                </div>

                {/* M-Pesa */}
                <div
                  onClick={() => setMethod('mpesa')}
                  className='flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all'
                  style={{ borderColor: method === 'mpesa' ? '#f97316' : '#e5e7eb', background: method === 'mpesa' ? '#fff7ed' : '#fff' }}
                >
                  <BsPhone className='text-2xl text-green-500' />
                  <div>
                    <p className='font-semibold text-sm text-gray-900'>M-Pesa</p>
                    <p className='text-xs text-gray-500'>Pay via M-Pesa STK push</p>
                  </div>
                  <div className='ml-auto w-4 h-4 rounded-full border-2 flex items-center justify-center' style={{ borderColor: '#f97316' }}>
                    {method === 'mpesa' && <div className='w-2 h-2 rounded-full' style={{ background: '#f97316' }} />}
                  </div>
                </div>

                {method === 'mpesa' && (
                  <div className='relative'>
                    <BsPhone className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm' />
                    <input
                      value={mpesaPhone} onChange={(e) => setMpesaPhone(e.target.value)}
                      placeholder='M-Pesa number e.g 0712345678'
                      className='w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400'
                    />
                  </div>
                )}

                {/* Stripe */}
                <div
                  onClick={() => setMethod('stripe')}
                  className='flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all'
                  style={{ borderColor: method === 'stripe' ? '#f97316' : '#e5e7eb', background: method === 'stripe' ? '#fff7ed' : '#fff' }}
                >
                  <SiStripe className='text-2xl text-indigo-600' />
                  <div>
                    <p className='font-semibold text-sm text-gray-900'>Card / Stripe</p>
                    <p className='text-xs text-gray-500'>Visa, Mastercard, and more</p>
                  </div>
                  <div className='ml-auto w-4 h-4 rounded-full border-2 flex items-center justify-center' style={{ borderColor: '#f97316' }}>
                    {method === 'stripe' && <div className='w-2 h-2 rounded-full' style={{ background: '#f97316' }} />}
                  </div>
                </div>

                {method === 'stripe' && (
                  <div className='flex flex-col gap-3 mt-1'>
                    <input
                      value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}
                      placeholder='Card Number'
                      maxLength={19}
                      className='w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400'
                    />
                    <div className='flex gap-3'>
                      <input
                        value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)}
                        placeholder='MM / YY'
                        maxLength={5}
                        className='w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400'
                      />
                      <input
                        value={cardCvc} onChange={(e) => setCardCvc(e.target.value)}
                        placeholder='CVC'
                        maxLength={3}
                        className='w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400'
                      />
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* Right — Order Summary */}
          <div className='lg:w-72 flex flex-col gap-4 h-fit'>
            <div className='bg-white border border-gray-100 rounded-2xl p-6 shadow-sm'>
              <h2 className='font-bold text-gray-900 mb-4'>Order Summary</h2>

              <div className='flex flex-col gap-2 text-sm text-gray-600'>
                {cart.map((item) => (
                  <div key={item.id} className='flex justify-between'>
                    <span>{item.title} × {item.count}</span>
                    <span>KSh {(item.price * item.count).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className='border-t border-gray-200 mt-4 pt-4 flex flex-col gap-2 text-sm'>
                <div className='flex justify-between text-gray-600'>
                  <span>Subtotal</span>
                  <span>KSh {total.toLocaleString()}</span>
                </div>
                <div className='flex justify-between text-gray-600'>
                  <span>Delivery</span>
                  <span className='text-green-500 font-medium'>Free</span>
                </div>
                <div className='flex justify-between font-bold text-gray-900 text-base pt-2 border-t border-gray-100'>
                  <span>Total</span>
                  <span style={{ color: '#f97316' }}>KSh {total.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={placeOrder}
                disabled={placing}
                className='mt-6 w-full py-3 rounded-full text-white font-semibold text-sm transition-transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed'
                style={{ background: '#f97316' }}
              >
                {placing ? 'Placing Order...' : `Pay KSh ${total.toLocaleString()}`}
              </button>

              <p className='text-xs text-gray-400 text-center mt-3 flex items-center justify-center gap-1'>
                <FiCheckCircle className='text-gray-300' /> Secure & encrypted checkout
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Checkout