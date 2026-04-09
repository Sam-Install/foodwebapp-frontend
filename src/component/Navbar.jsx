import React, { useState, useRef, useEffect } from 'react'
import { GiHamburger } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { MdMenu, MdClose, MdAdminPanelSettings } from "react-icons/md";
import { FiUser, FiLogIn, FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='absolute top-0 left-0 right-0 z-50'>
      {/* Main Navbar — transparent so hero image shows through */}
      <div className='flex items-center justify-between py-5 px-6'>

        <div className='flex items-center gap-2'>
          <GiHamburger className='text-orange-500 text-2xl' />
          <h1 className='text-2xl font-bold text-white'>Pablo<span className='text-orange-500'>Eats</span></h1>
        </div>

        <ul className='hidden sm:flex gap-6 font-medium text-white'>
          <li><Link to='/' className='hover:text-orange-400 transition-colors'>Home</Link></li>
          <li><Link to='/menu' className='hover:text-orange-400 transition-colors'>Menu</Link></li>
          <li><Link to='/cart' className='hover:text-orange-400 transition-colors'>AboutUs</Link></li>
        </ul>

        <div className='flex items-center gap-4'>

          <Link to='/cart'>
            <IoCartOutline className='text-2xl text-white hover:text-orange-400 transition-colors' />
          </Link>

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

          <button className='sm:hidden focus:outline-none' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen
              ? <MdClose className='text-2xl text-white' />
              : <MdMenu className='text-2xl text-white' />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='sm:hidden bg-white border-t border-gray-100 shadow-md px-4 pb-4'>
          <ul className='flex flex-col gap-1 pt-2'>
            <li><Link to='/' onClick={() => setMenuOpen(false)}
              className='block px-3 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors font-medium'>Home</Link></li>
            <li><Link to='/menu' onClick={() => setMenuOpen(false)}
              className='block px-3 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors font-medium'>Menu</Link></li>
            <li><Link to='/cart' onClick={() => setMenuOpen(false)}
              className='block px-3 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors font-medium'>AboutUs</Link></li>
            <li className='border-t border-gray-100 mt-1 pt-2'>
              <Link to='/admin' onClick={() => setMenuOpen(false)}
                className='flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors font-medium'>
                <MdAdminPanelSettings /> Admin Login
              </Link>
            </li>
            <li>
              <Link to='/login' onClick={() => setMenuOpen(false)}
                className='flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors font-medium'>
                <FiLogIn /> User Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar