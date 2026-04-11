import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GiHamburger } from 'react-icons/gi'
import { FiX, FiUser, FiUserPlus } from 'react-icons/fi'

const AuthPromptModal = ({ onClose }) => {
  const navigate = useNavigate()

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center px-4'
      style={{ background: 'rgba(0,0,0,0.5)' }}>

      <div className='w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 relative'>

        {/* Close */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors'
        >
          <FiX className='text-lg' />
        </button>

        {/* Header */}
        <div className='flex flex-col items-center mb-6'>
          <div className='bg-orange-50 rounded-full p-4 mb-4'>
            <GiHamburger className='text-4xl' style={{ color: '#f97316' }} />
          </div>
          <h2 className='text-xl font-bold text-gray-900 text-center'>
            Almost there!
          </h2>
          <p className='text-sm text-gray-500 mt-2 text-center leading-relaxed'>
            You need an account to complete your order. It only takes a minute!
          </p>
        </div>

        {/* Buttons */}
        <div className='flex flex-col gap-3'>

          <button
            onClick={() => navigate('/register')}
            className='w-full py-3 rounded-xl text-white font-semibold text-sm transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2'
            style={{ background: '#f97316' }}
          >
            <FiUserPlus />
            Create an Account
          </button>

          <button
            onClick={() => navigate('/user')}
            className='w-full py-3 rounded-xl text-sm font-semibold border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2'
          >
            <FiUser />
            I already have an account
          </button>

          <p className='text-xs text-center text-gray-400 mt-1'>
            Your cart will be saved while you sign in.
          </p>

        </div>
      </div>
    </div>
  )
}

export default AuthPromptModal