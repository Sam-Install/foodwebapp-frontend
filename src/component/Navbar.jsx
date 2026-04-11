import React, { useState, useRef, useEffect } from 'react'
import { GiHamburger } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { MdMenu, MdClose, MdAdminPanelSettings } from "react-icons/md";
import { FiUser, FiLogIn, FiLogOut, FiHome, FiList, FiInfo } from "react-icons/fi";
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const { cart } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + item.count, 0);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <div className='absolute top-0 left-0 right-0 z-50'>

      {/* ── Main Bar ───────────────────────────────────── */}
      <div className='flex items-center justify-between py-5 px-6'>

        <Link to='/' className='flex items-center gap-2'>
          <GiHamburger className='text-orange-500 text-2xl' />
          <h1 className='text-2xl font-bold text-white'>Pablo<span className='text-orange-500'>Eats</span></h1>
        </Link>

        <ul className='hidden sm:flex gap-6 font-medium text-white'>
          <li><Link to='/'      className='hover:text-orange-400 transition-colors'>Home</Link></li>
          <li><Link to='/menu'  className='hover:text-orange-400 transition-colors'>Menu</Link></li>
          <li><Link to='/about' className='hover:text-orange-400 transition-colors'>About Us</Link></li>
        </ul>

        <div className='flex items-center gap-4'>

          {/* Cart with badge */}
          <Link to='/cart' className='relative'>
            <IoCartOutline className='text-2xl text-white hover:text-orange-400 transition-colors' />
            {cartCount > 0 && (
              <span className='absolute -top-2 -right-2 w-4 h-4 rounded-full text-white text-[10px] font-bold flex items-center justify-center'
                style={{ background: '#f97316' }}>
                {cartCount}
              </span>
            )}
          </Link>

          {/* Profile dropdown */}
          <div className='relative' ref={profileRef}>
            <button onClick={() => setProfileOpen(!profileOpen)} className='flex items-center focus:outline-none'>
              <CgProfile className='text-2xl text-white hover:text-orange-400 transition-colors cursor-pointer' />
            </button>
            {profileOpen && (
              <div className='absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden'>
                <div className='px-4 py-3 border-b border-gray-100'>
                  <p className='text-xs text-gray-400 uppercase tracking-wide font-semibold'>Account</p>
                </div>
                <Link to='/admin' onClick={() => setProfileOpen(false)}
                  className='flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors'>
                  <MdAdminPanelSettings className='text-lg' /> Admin Login
                </Link>
                <Link to='/login' onClick={() => setProfileOpen(false)}
                  className='flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors'>
                  <FiLogIn className='text-lg' /> User Login
                </Link>
                <Link to='/profile' onClick={() => setProfileOpen(false)}
                  className='flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors'>
                  <FiUser className='text-lg' /> My Profile
                </Link>
                <div className='border-t border-gray-100'>
                  <button onClick={() => setProfileOpen(false)}
                    className='flex items-center gap-3 w-full px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors'>
                    <FiLogOut className='text-lg' /> Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button className='sm:hidden focus:outline-none z-[60] relative' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen
              ? <MdClose className='text-2xl text-gray-900' />
              : <MdMenu className='text-2xl text-white' />
            }
          </button>
        </div>
      </div>

      {/* ── Full Screen Mobile Menu ─────────────────────── */}
      <div
        className='sm:hidden fixed inset-0 z-40 flex flex-col transition-all duration-500'
        style={{
          background: '#ffffff',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-12px)',
        }}
      >
        <div className='flex items-center justify-between px-6 py-5 border-b border-gray-100'>
          <div className='flex items-center gap-2'>
            <GiHamburger className='text-orange-500 text-2xl' />
            <span className='text-2xl font-bold text-gray-900'>Pablo<span className='text-orange-500'>Eats</span></span>
          </div>
          <button onClick={() => setMenuOpen(false)} className='focus:outline-none'>
            <MdClose className='text-3xl text-gray-900' />
          </button>
        </div>

        <nav className='flex flex-col justify-center flex-1 px-8 gap-1'>
          {[
            { to: '/',      label: 'Home',    icon: <FiHome /> },
            { to: '/menu',  label: 'Menu',    icon: <FiList /> },
            { to: '/about', label: 'About Us',icon: <FiInfo /> },
            { to: '/cart',  label: `Cart${cartCount > 0 ? ` (${cartCount})` : ''}`, icon: <IoCartOutline /> },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className='flex items-center gap-5 px-4 py-4 rounded-2xl group transition-all duration-200 hover:bg-orange-50'
            >
              <span className='text-orange-500 text-2xl'>{item.icon}</span>
              <span className='font-extrabold text-gray-900 group-hover:text-orange-500 transition-colors text-sm'>
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className='px-8 pb-12 border-t border-gray-100 pt-6 flex flex-col gap-1'>
          <p className='text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2'>Account</p>
          <Link to='/admin' onClick={() => setMenuOpen(false)}
            className='flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors font-medium'>
            <MdAdminPanelSettings className='text-lg text-orange-500' /> Admin Login
          </Link>
          <Link to='/login' onClick={() => setMenuOpen(false)}
            className='flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors font-medium'>
            <FiLogIn className='text-lg text-orange-500' /> User Login
          </Link>
          <Link to='/profile' onClick={() => setMenuOpen(false)}
            className='flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors font-medium'>
            <FiUser className='text-lg text-orange-500' /> My Profile
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar