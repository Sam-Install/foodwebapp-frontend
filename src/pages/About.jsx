import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburger } from 'react-icons/gi'
import { MdOutlineDeliveryDining, MdOutlineStorefront, MdOutlinePeople } from 'react-icons/md'
import { FiAward, FiHeart, FiClock } from 'react-icons/fi'
import heroImg from '../assets/header_img.png'

const values = [
  {
    icon: <FiHeart />,
    title: 'Made with Love',
    desc: 'Every dish is prepared with genuine care, using fresh ingredients sourced daily from trusted local suppliers.',
  },
  {
    icon: <FiClock />,
    title: 'Fast & Reliable',
    desc: 'We respect your time. Hot meals delivered to your door in under 30 minutes — every single order.',
  },
  {
    icon: <FiAward />,
    title: 'Unmatched Quality',
    desc: 'From street classics to gourmet bites, our kitchen maintains the highest standards in every plate we serve.',
  },
]

const About = () => {
  return (
    <div className='bg-white'>

      {/* ── HERO ─────────────────────────────────────────── */}
      <div className='relative w-full overflow-hidden' style={{ minHeight: '60vh' }}>
        <img src={heroImg} alt='About PabloEats' className='absolute inset-0 w-full h-full object-cover' />
        <div className='absolute inset-0'
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.72) 100%)' }} />
        <div className='relative z-10 flex flex-col items-center justify-end text-center pb-16 pt-40 px-6'
          style={{ minHeight: '60vh' }}>
          <span className='inline-block mb-4 text-xs font-bold tracking-widest uppercase px-5 py-1.5 rounded-full'
            style={{ background: '#f97316', color: '#fff' }}>
            Our Story
          </span>
          <h1 className='text-white font-extrabold leading-none mb-4'
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
            Food Made with{' '}
            <span style={{ color: '#f97316' }}>Purpose.</span>
          </h1>
          <p className='max-w-xl text-gray-300 leading-relaxed'
            style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}>
            Born in Mombasa, built on flavor — PabloEats is more than a food app.
            It's a love letter to great cooking and the people who enjoy it.
          </p>
        </div>
      </div>

      {/* ── STATS ────────────────────────────────────────── */}
      <div className='px-4 sm:px-8 md:px-16 lg:px-24 py-16'>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
          {[
            { value: '10K+', label: 'Orders Delivered', icon: <MdOutlineDeliveryDining /> },
            { value: '50+',  label: 'Menu Items',        icon: <MdOutlineStorefront /> },
            { value: '8K+',  label: 'Happy Customers',   icon: <MdOutlinePeople /> },
            { value: '4.9★', label: 'Average Rating',    icon: <FiAward /> },
          ].map((s, i) => (
            <div key={i}
              className='flex flex-col gap-3 p-7 rounded-2xl border border-gray-100 bg-white group transition-all duration-300 hover:-translate-y-1 hover:shadow-md'>
              <div className='w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110'
                style={{ background: '#fff7ed', color: '#f97316' }}>
                {s.icon}
              </div>
              <span className='font-extrabold text-gray-900 leading-none'
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
                {s.value}
              </span>
              <div className='w-8 h-0.5 rounded-full' style={{ background: '#f97316' }} />
              <span className='text-gray-500 text-sm font-medium'>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── OUR STORY ────────────────────────────────────── */}
      <div className='px-4 sm:px-8 md:px-16 lg:px-24 pb-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='relative rounded-3xl overflow-hidden h-72 sm:h-96'>
            <img src={heroImg} alt='Our Kitchen' className='w-full h-full object-cover' />
            <div className='absolute inset-0 rounded-3xl' style={{ background: 'rgba(249,115,22,0.10)' }} />
            <div className='absolute bottom-5 left-5 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow'>
              <GiHamburger className='text-orange-500 text-xl' />
              <span className='font-bold text-gray-900 text-sm'>Pablo<span className='text-orange-500'>Eats</span></span>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <span className='text-xs font-bold tracking-widest uppercase text-orange-500'>Who We Are</span>
            <h2 className='text-gray-900 font-extrabold leading-tight'
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
              Where Every Flavor<br />Tells a Story
            </h2>
            <div className='w-12 h-1 rounded-full' style={{ background: '#f97316' }} />
            <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
              PabloEats started as a small home kitchen in Mombasa with one simple goal —
              to serve food that actually tastes like it was made for you. What began as
              weekend deliveries to neighbors quickly grew into a full-scale food experience
              loved across the city.
            </p>
            <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
              We believe great food shouldn't be complicated. Fresh ingredients, bold flavors,
              and honest cooking — that's the PabloEats way. Every plate we send out carries
              the same energy as the very first one we ever made.
            </p>
            <Link to='/menu'>
              <button className='mt-2 px-7 py-3 rounded-full font-bold text-white text-sm w-fit transition-transform hover:scale-105 active:scale-95'
                style={{ background: '#f97316' }}>
                Explore Our Menu
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── OUR VALUES ───────────────────────────────────── */}
      <div className='px-4 sm:px-8 md:px-16 lg:px-24 py-14' style={{ background: '#fff7ed' }}>
        <p className='text-center text-xs font-bold tracking-widest uppercase text-orange-500 mb-2'>What Drives Us</p>
        <h2 className='text-center font-extrabold text-gray-900 mb-10'
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
          Our Core Values
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
          {values.map((v, i) => (
            <div
              key={i}
              className='bg-white rounded-2xl p-7 flex flex-col gap-3 border border-orange-100 cursor-default'
              style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#f97316'
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(249,115,22,0.25)'
                e.currentTarget.style.borderColor = '#f97316'
                e.currentTarget.querySelectorAll('[data-icon]')[0].style.background = 'rgba(255,255,255,0.2)'
                e.currentTarget.querySelectorAll('[data-icon]')[0].style.color = '#fff'
                e.currentTarget.querySelectorAll('[data-title]')[0].style.color = '#fff'
                e.currentTarget.querySelectorAll('[data-desc]')[0].style.color = 'rgba(255,255,255,0.85)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#fff'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = '#fed7aa'
                e.currentTarget.querySelectorAll('[data-icon]')[0].style.background = '#fff7ed'
                e.currentTarget.querySelectorAll('[data-icon]')[0].style.color = '#f97316'
                e.currentTarget.querySelectorAll('[data-title]')[0].style.color = '#111827'
                e.currentTarget.querySelectorAll('[data-desc]')[0].style.color = '#6b7280'
              }}
            >
              <span data-icon
                className='text-2xl w-11 h-11 rounded-full flex items-center justify-center'
                style={{ background: '#fff7ed', color: '#f97316', transition: 'all 0.3s ease' }}>
                {v.icon}
              </span>
              <h3 data-title className='font-bold text-base'
                style={{ color: '#111827', transition: 'color 0.3s ease' }}>
                {v.title}
              </h3>
              <p data-desc className='text-sm leading-relaxed'
                style={{ color: '#6b7280', transition: 'color 0.3s ease' }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 my-16 rounded-3xl overflow-hidden'
        style={{ background: '#f97316' }}>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-6 px-8 sm:px-14 py-12'>
          <div>
            <h2 className='text-white font-extrabold leading-tight mb-2'
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
              Hungry? Let's Fix That.
            </h2>
            <p className='text-orange-100 text-sm leading-relaxed max-w-md'>
              Browse our full menu and get your favorite meal delivered hot and fast — right to your door.
            </p>
          </div>
          <Link to='/menu' className='flex-shrink-0'>
            <button className='px-8 py-3.5 rounded-full font-bold text-orange-500 text-sm bg-white transition-transform hover:scale-105 active:scale-95'>
              Order Now
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default About