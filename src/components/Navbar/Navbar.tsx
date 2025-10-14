import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import { FaMoon } from 'react-icons/fa';
import { MdSunny } from 'react-icons/md';
import { DigitalClock } from '../DigitalClock/DigitalClock';
import { MdOutlineWatchLater } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDay = new Date().getHours() >= 6 && new Date().getHours() <= 18;
  return (
    <nav className='bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 dark:from-slate-800 dark:via-gray-900 dark:to-black shadow-xl sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link to='/' className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg'>
                {isDay ? (
                  <span>
                    <MdSunny className='w-6 h-6 text-white' />
                  </span>
                ) : (
                  <span>
                    <FaMoon className='w-6 h-6 text-white' />
                  </span>
                )}
              </div>
              <span className='text-white font-bold text-xl drop-shadow-lg'>
                Weather App
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-2'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to='/map'
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                Map
              </NavLink>
            </div>
          </div>

          {/* Weather Info Badge */}
          <div className='flex items-center space-x-3'>
            <div className='hidden md:flex items-center space-x-3'>
              <div className='bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20'>
                <span className='text-white/90 flex items-center gap-1 text-sm font-medium'>
                  <span>
                    <MdOutlineWatchLater className='w-5 h-5 text-white' />
                  </span>{' '}
                  {DigitalClock()}
                </span>
              </div>
            </div>
            <div>
              <ModeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-white hover:bg-white/20 p-2 rounded-xl transition-all duration-200 backdrop-blur-sm'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-white/10 backdrop-blur-lg rounded-2xl mt-2 border border-white/20 shadow-xl'>
              <NavLink
                to='/'
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to='/about'
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to='/map'
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                Map
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
