const MainWeatherSkeleton = () => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-pulse">
      <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Side - Location & Date */}
            <div className="text-center lg:text-left space-y-3">
              <div className="h-8 w-32 bg-white/40 dark:bg-gray-700 rounded"></div>
              <div className="h-5 w-48 bg-white/20 dark:bg-gray-600 rounded"></div>
            </div>

            {/* Center - Weather Icon */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/20 dark:bg-gray-700 flex items-center justify-center shadow-2xl"></div>
            </div>

            {/* Right Side - Temperature */}
            <div className="text-center lg:text-right space-y-3">
              <div className="h-16 md:h-20 w-28 md:w-36 bg-white/50 dark:bg-gray-700 rounded mx-auto lg:ml-auto"></div>
              <div className="h-5 w-24 bg-white/30 dark:bg-gray-600 rounded mx-auto lg:ml-auto"></div>
            </div>
          </div>

          {/* Additional Weather Info Cards */}
          <div className="mt-8 pt-8 border-t border-white/20 dark:border-gray-700/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-6 bg-white/10 dark:bg-gray-700/40 shadow-xl flex flex-col justify-between hover:scale-105 transition-transform duration-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-white/20 dark:bg-gray-600 p-3 rounded-lg w-10 h-10"></div>
                      <div className="h-6 w-10 bg-white/50 dark:bg-gray-600 rounded"></div>
                    </div>
                    <div className="h-4 w-20 bg-white/30 dark:bg-gray-600 rounded"></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWeatherSkeleton;

