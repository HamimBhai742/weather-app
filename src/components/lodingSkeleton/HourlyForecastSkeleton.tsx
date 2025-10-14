const HourlyForecastSkeleton = () => {
  return (
    <div className='w-full max-w-4xl mx-auto p-6 rounded-2xl shadow-lg animate-pulse'>
      {/* Hourly Cards */}
      <div className='flex overflow-x-auto gap-4 pb-3'>
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className='min-w-[90px] sm:min-w-[100px] h-28 rounded-2xl bg-white/30 dark:bg-gray-700 flex flex-col items-center justify-center space-y-2 p-3'
            >
              <div className='h-4 w-16 bg-white/60 dark:bg-gray-600 rounded'></div>
              <div className='w-8 h-8 bg-white/50 dark:bg-gray-600 rounded-full'></div>
              <div className='h-4 w-10 bg-white/60 dark:bg-gray-600 rounded'></div>
            </div>
          ))}
      </div>

      {/* Scrollbar skeleton (optional visual hint) */}
      <div className='h-3 w-full bg-white/30 dark:bg-gray-700 rounded mt-2'>
        <div className='h-3 w-1/3 bg-white/50 dark:bg-gray-600 rounded'></div>
      </div>
    </div>
  );
};

export default HourlyForecastSkeleton;
