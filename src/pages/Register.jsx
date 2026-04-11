import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GiHamburger } from 'react-icons/gi'
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'

const Register = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleRegister = () => {
    setError('')
    if (!form.name || !form.email || !form.password || !form.confirm)
      return setError('Please fill in all fields.')
    if (form.password !== form.confirm)
      return setError('Passwords do not match.')
    if (form.password.length < 6)
      return setError('Password must be at least 6 characters.')

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/user')
    }, 1500)
  }

  return (
    <div className='min-h-screen bg-gray-600 flex flex-col justify-center items-center px-4 py-10'>

      {/* Logo */}
      <div className='flex items-center gap-2 mb-15 pt-15'>
        <GiHamburger className='text-orange-500 text-3xl' />
        <span className='text-2xl font-bold text-gray-900'>
          Pablo<span className='text-orange-500'>Eats</span>
        </span>
      </div>

      {/* Card */}
      <div className='w-full max-w-sm  bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-10'>

        <div className='flex flex-col items-center mb-8'>
          <div className='bg-orange-50 rounded-full p-4 mb-4'>
            <GiHamburger className='text-4xl' style={{ color: '#f97316' }} />
          </div>
          <h2 className='text-xl font-bold text-gray-900'>Create Account</h2>
          <p className='text-sm text-gray-500 mt-1'>Join PabloEats today</p>
        </div>

        <div className='flex flex-col gap-3'>

          {/* Name */}
          <div>
            <label className='text-xs font-medium text-gray-600 mb-1.5 block'>Full Name</label>
            <div className='relative'>
              <FiUser className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm' />
              <input
                name='name'
                value={form.name}
                onChange={handle}
                type='text'
                placeholder='John Doe'
                className='w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-gray-50'
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className='text-xs font-medium text-gray-600 mb-1.5 block'>Email Address</label>
            <div className='relative'>
              <FiMail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm' />
              <input
                name='email'
                value={form.email}
                onChange={handle}
                type='email'
                placeholder='john@example.com'
                className='w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-gray-50'
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className='text-xs font-medium text-gray-600 mb-1.5 block'>Password</label>
            <div className='relative'>
              <FiLock className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm' />
              <input
                name='password'
                value={form.password}
                onChange={handle}
                type={showPass ? 'text' : 'password'}
                placeholder='Min. 6 characters'
                className='w-full pl-9 pr-10 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-gray-50'
              />
              <button
                onClick={() => setShowPass(!showPass)}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
              >
                {showPass ? <FiEyeOff className='text-sm' /> : <FiEye className='text-sm' />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className='text-xs font-medium text-gray-600 mb-1.5 block'>Confirm Password</label>
            <div className='relative'>
              <FiLock className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm' />
              <input
                name='confirm'
                value={form.confirm}
                onChange={handle}
                type={showConfirm ? 'text' : 'password'}
                placeholder='Re-enter password'
                className='w-full pl-9 pr-10 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-gray-50'
              />
              <button
                onClick={() => setShowConfirm(!showConfirm)}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
              >
                {showConfirm ? <FiEyeOff className='text-sm' /> : <FiEye className='text-sm' />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className='text-xs text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-2.5'>
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            onClick={handleRegister}
            disabled={loading}
            className='w-full py-3 rounded-xl text-white font-semibold text-sm mt-2 transition-transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed'
            style={{ background: '#f97316' }}
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>

          <p className='text-xs text-center text-gray-400 mt-1'>
            Already have an account?{' '}
            <span
              onClick={() => navigate('/user')}
              className='text-orange-500 cursor-pointer hover:underline'
            >
              Sign in
            </span>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Register