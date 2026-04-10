import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburger } from 'react-icons/gi'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='bg-gray-950 text-gray-400 pt-14 pb-6 px-4 sm:px-8 md:px-16 lg:px-24 mt-16'>

      {/* Top grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-800'>

        {/* Brand */}
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <GiHamburger className='text-orange-500 text-3xl' />
            <span className='text-2xl font-bold text-white'>Pablo<span className='text-orange-500'>Eats</span></span>
          </div>
          <p className='text-sm leading-relaxed'>
            From sizzling street flavors to gourmet bites, PabloEats brings you food that hits different — every single time.
          </p>
          {/* Socials */}
          <div className='flex gap-3 mt-1'>
            {[
              { icon: <FaFacebookF />, href: '#' },
              { icon: <FaInstagram />, href: '#' },
              { icon: <FaTwitter />, href: '#' },
              { icon: <FaYoutube />, href: '#' },
            ].map((s, i) => (
              <a key={i} href={s.href}
                className='w-9 h-9 rounded-full flex items-center justify-center border border-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors text-sm'>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className='text-white font-semibold mb-4 text-sm uppercase tracking-wider'>Quick Links</h4>
          <ul className='flex flex-col gap-2 text-sm'>
            {[
              { label: 'Home', to: '/' },
              { label: 'Menu', to: '/menu' },
              { label: 'About Us', to: '/about' },
              { label: 'Contact', to: '/contact' },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to}
                  className='hover:text-orange-500 transition-colors flex items-center gap-1.5 group'>
                  <span className='text-orange-500 text-xs transition-transform group-hover:translate-x-1 duration-200'>›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className='text-white font-semibold mb-4 text-sm uppercase tracking-wider'>Opening Hours</h4>
          <ul className='flex flex-col gap-2 text-sm'>
            <li className='flex justify-between'>
              <span>Mon – Fri</span>
              <span className='text-white'>8:00am – 10:00pm</span>
            </li>
            <li className='flex justify-between'>
              <span>Saturday</span>
              <span className='text-white'>9:00am – 11:00pm</span>
            </li>
            <li className='flex justify-between'>
              <span>Sunday</span>
              <span className='text-white'>10:00am – 9:00pm</span>
            </li>
            <li className='mt-2 text-xs px-2 py-1 rounded-full w-fit'
              style={{ background: '#14532d', color: '#86efac' }}>
              Open Now
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className='text-white font-semibold mb-4 text-sm uppercase tracking-wider'>Get In Touch</h4>
          <ul className='flex flex-col gap-3 text-sm'>
            <li className='flex items-start gap-3'>
              <MdOutlineLocationOn className='text-orange-500 text-lg mt-0.5 flex-shrink-0' />
              <span>Moi Avenue, Mombasa CBD, Kenya</span>
            </li>
            <li className='flex items-center gap-3'>
              <MdOutlinePhone className='text-orange-500 text-lg flex-shrink-0' />
              <a href='tel:+254700000000' className='hover:text-orange-500 transition-colors'>+254 700 000 000</a>
            </li>
            <li className='flex items-center gap-3'>
              <MdOutlineEmail className='text-orange-500 text-lg flex-shrink-0' />
              <a href='mailto:hello@pabloeats.co.ke' className='hover:text-orange-500 transition-colors'>hello@pabloeats.co.ke</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className='pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600'>
        <p>© {new Date().getFullYear()} PabloEats. All rights reserved.</p>
        <div className='flex gap-4'>
          <Link to='/privacy' className='hover:text-orange-500 transition-colors'>Privacy Policy</Link>
          <Link to='/terms' className='hover:text-orange-500 transition-colors'>Terms of Service</Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer