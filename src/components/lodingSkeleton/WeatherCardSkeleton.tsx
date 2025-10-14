const WeatherCardSkeleton = () => {
  return (
    <div className="max-w-xl w-full mx-auto p-6 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 dark:from-gray-800 dark:to-gray-900 shadow-lg animate-pulse">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="h-6 w-32 bg-white/40 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-4 w-44 bg-white/30 dark:bg-gray-700 rounded"></div>
      </div>

      {/* Icon and Temp */}
      <div className="flex justify-center items-center gap-6 mb-6">
        <div className="w-20 h-20 bg-white/30 dark:bg-gray-700 rounded-full"></div>
        <div className="flex flex-col items-start">
          <div className="h-10 w-16 bg-white/50 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-4 w-24 bg-white/30 dark:bg-gray-700 rounded"></div>
        </div>
      </div>

      <hr className="border-white/30 dark:border-gray-700 mb-6" />

      {/* Info Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/30 dark:bg-gray-700 p-3 flex flex-col items-center justify-center space-y-2"
            >
              <div className="h-6 w-10 bg-white/60 dark:bg-gray-600 rounded"></div>
              <div className="h-3 w-16 bg-white/40 dark:bg-gray-600 rounded"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WeatherCardSkeleton;
