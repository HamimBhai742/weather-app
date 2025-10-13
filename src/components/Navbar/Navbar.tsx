import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='  bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 shadow-xl sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link to='/' className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z' />
                </svg>
              </div>
              <span className='text-white font-bold text-xl drop-shadow-lg'>
                WeatherApp
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
                to='/contact'
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Weather Info Badge */}
          <div className='flex items-center space-x-3'>
            <div>
              <ModeToggle />
            </div>
            <div className='hidden lg:flex items-center space-x-3'>
              <div className='bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20'>
                <span className='text-white/90 text-sm font-medium'>24°C</span>
              </div>
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
                to='/contact'
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                Contact
              </NavLink>

              {/* Mobile Weather Info */}
              <div className='pt-2 mt-2 border-t border-white/20'>
                <div className='bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20'>
                  <span className='text-white/90 text-sm font-medium'>
                    Current: 24°C
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
