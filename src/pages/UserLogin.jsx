import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GiHamburger } from 'react-icons/gi'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'

const UserLogin = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleLogin = () => {
    setError('')
    if (!form.email || !form.password) return setError('Please fill in all fields.')

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      // Replace this with your real auth logic
      if (form.email === 'user@pabloeats.com' && form.password === 'user123') {
        navigate('/')
      } else {
        setError('Invalid email or password.')
      }
    }, 1500)
  }

  return (
    <div className='min-h-screen bg-gray-500 flex flex-col justify-center items-center px-4'>

      {/* Logo */}
      <div className='flex items-center gap-2 mb-8'>
        <GiHamburger className='text-orange-500 text-3xl' />
        <span className='text-2xl font-bold text-gray-900'>
          Pablo<span className='text-orange-500'>Eats</span>
        </span>
      </div>

      {/* Card */}
      <div className='w-full max-w-sm bg-white rounded-2xl border border-gray-100 shadow-sm p-8'>

        <div className='flex flex-col items-center mb-6'>
          <GiHamburger className='text-5xl mb-3' style={{ color: '#f97316' }} />
          <h2 className='text-xl font-bold text-gray-900'>Welcome Back</h2>
          <p className='text-sm text-gray-500 mt-1'>Sign in to your account</p>
        </div>

        <div className='flex flex-col gap-4'>

          {/* Email */}
          <div className='relative'>
            <FiMail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm' />
            <input
              name='email'
              value={form.email}
              onChange={handle}
              type='email'
              placeholder='Email Address'
              className='w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 transition-colors'
            />
          </div>

          {/* Password */}
          <div className='relative'>
            <FiLock className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm' />
            <input
              name='password'
              value={form.password}
              onChange={handle}
              type={showPass ? 'text' : 'password'}
              placeholder='Password'
              className='w-full pl-9 pr-10 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 transition-colors'
            />
            <button
              onClick={() => setShowPass(!showPass)}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
            >
              {showPass ? <FiEyeOff className='text-sm' /> : <FiEye className='text-sm' />}
            </button>
          </div>

          {/* Error */}
          {error && (
            <p className='text-xs text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-2.5'>
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className='w-full py-3 rounded-xl text-white font-semibold text-sm mt-1 transition-transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed'
            style={{ background: '#f97316' }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          {/* Register link */}
          <p className='text-xs text-center text-gray-400'>
            Don't have an account?{' '}
            <span
              onClick={() => navigate('/register')}
              className='text-orange-500 cursor-pointer hover:underline'
            >
              Create one
            </span>
          </p>

          {/* Back home */}
          <p className='text-xs text-center text-gray-400'>
            <span
              onClick={() => navigate('/')}
              className='text-orange-500 cursor-pointer hover:underline'
            >
              ← Back to home
            </span>
          </p>

        </div>
      </div>
    </div>
  )
}

export default UserLogin