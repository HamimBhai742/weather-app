import { FaMapPin } from 'react-icons/fa';

const Search = ({
  setSearchQuery,
}: {
  setSearchQuery: (query: string) => void;
}) => {
  const handleSearch = () => {
    const searchItem = document.getElementById('search');
    if (searchItem instanceof HTMLInputElement) {
      const val = searchItem.value;
      setSearchQuery(val);
    }
  };
  return (
    <div className='w-full max-w-2xl mb-12'>
      <div className='relative group'>
        <div className='absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-400 dark:from-gray-600 dark:to-gray-700 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300'></div>
        <div className='relative bg-white/20 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-2 border border-white/30 dark:border-gray-600/50 shadow-2xl'>
          <div className='flex items-center gap-2'>
            <button
              type='button'
              className='bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white p-4 rounded-xl transition-all duration-200 shadow-lg'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </button>

            <div className='flex-1'>
              <input
                type='text'
                id='search'
                placeholder='Enter city name or location...'
                className='w-full bg-transparent text-white dark:text-gray-200 placeholder-white/70 dark:placeholder-gray-400 text-lg md:text-xl px-4 py-4 focus:outline-none font-medium'
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>

            <button
              onClick={handleSearch}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className='bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white p-4 rounded-xl transition-all duration-200 shadow-lg'
            >
              <FaMapPin className='w-6 h-6 text-red-600 animate-pulse' />
            </button>
          </div>
        </div>
      </div>

      <div className='mt-8 flex flex-wrap justify-center gap-3'>
        {[
          'New York',
          'London',
          'Tokyo',
          'Paris',
          'Sydney',
          'Dhaka',
          'Khulna',
          'Chittagong',
          'Rajshahi',
          'Barishal',
        ].map((city) => (
          <button
            key={city}
            onClick={() => setSearchQuery(city)}
            className='bg-white/20 hover:cursor-pointer dark:bg-gray-700/50 backdrop-blur-sm text-white dark:text-gray-200 px-4 py-2 rounded-full border border-white/30 dark:border-gray-600/50 hover:bg-white/30 dark:hover:bg-gray-600/50 transition-all duration-200 text-sm font-medium shadow-lg'
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Search;
