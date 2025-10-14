const WeeklyForecastSkeleton = () => {
  return (
    <div className="space-y-4 animate-pulse">
      {Array(7)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="bg-white/10 dark:bg-gray-700/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20 dark:border-gray-600/50 hover:bg-white/20 dark:hover:bg-gray-600/30 transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              {/* Day & Description */}
              <div className="flex-1">
                <div className="h-5 w-24 bg-white/40 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-4 w-32 bg-white/20 dark:bg-gray-700 rounded"></div>
              </div>

              {/* Weather Icon */}
              <div className="w-10 h-10 bg-white/30 dark:bg-gray-600 rounded-full mx-6 flex-shrink-0"></div>

              {/* Temperature Range */}
              <div className="flex-shrink-0 text-right space-y-2">
                <div className="h-5 w-14 bg-white/50 dark:bg-gray-600 rounded ml-auto"></div>
                <div className="h-4 w-10 bg-white/30 dark:bg-gray-700 rounded ml-auto"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WeeklyForecastSkeleton;
