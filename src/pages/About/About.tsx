import { Sun, Wind, Eye, Thermometer } from 'lucide-react';
import Sunny from '../../../lottieFiles/sunny.json';
import Night from '../../../lottieFiles/night.json';
import Lottie from 'lottie-react';
const About = () => {
  const features = [
    {
      icon: <Thermometer className='w-8 h-8' />,
      title: 'Real-time Weather',
      description:
        'Get accurate current weather conditions for any city worldwide',
    },
    {
      icon: <Eye className='w-8 h-8' />,
      title: '24-Hour Forecast',
      description: 'Detailed hourly predictions to plan your day ahead',
    },
    {
      icon: <Sun className='w-8 h-8' />,
      title: '7-Day Outlook',
      description: 'Weekly weather forecasts for better planning',
    },
    {
      icon: <Wind className='w-8 h-8' />,
      title: 'Detailed Metrics',
      description: 'Wind speed, humidity, pressure, and visibility data',
    },
  ];
  const isDay = new Date().getHours() >= 6 && new Date().getHours() <= 18;

  return (
    <div className='min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 dark:from-slate-900 dark:via-gray-900 dark:to-black'>
      <div className='container mx-auto px-4 py-8'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <div className='flex justify-center mb-6'>
            {isDay ? (
              <Lottie animationData={Sunny} className='w-32 h-32' loop={true} />
            ) : (
              <Lottie animationData={Night} className='w-32 h-32' loop={true} />
            )}
          </div>
          <h1 className='text-3xl md:text-5xl font-bold text-white dark:text-gray-100 mb-6 drop-shadow-lg'>
            About Weather App
          </h1>
          <p className='text-xl md:text-2xl text-white/90 dark:text-gray-300 font-light max-w-3xl mx-auto'>
            Your trusted companion for accurate weather forecasts and real-time
            atmospheric data
          </p>
        </div>

        {/* Mission Section */}
        <div className='bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 p-8 md:p-12 mb-12 max-w-5xl mx-auto'>
          <div className='text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-white dark:text-gray-100 mb-6'>
              Our Mission
            </h2>
            <p className='text-lg text-white/90 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto'>
              We believe everyone deserves access to reliable, accurate weather
              information. Our app combines data from trusted meteorological
              sources to deliver precise forecasts that help you make informed
              decisions about your daily activities.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className='mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-white dark:text-gray-100 text-center mb-12'>
            Key Features
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-800/40 transition-all duration-300 hover:scale-105'
              >
                <div className='text-white/80 dark:text-gray-300 mb-4'>
                  {feature.icon}
                </div>
                <h3 className='text-xl font-semibold text-white dark:text-gray-100 mb-3'>
                  {feature.title}
                </h3>
                <p className='text-white/80 dark:text-gray-400 text-sm leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
          <div className='bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20 dark:border-gray-700/50'>
            <div className='text-3xl font-bold text-white dark:text-gray-100 mb-2'>
              200K+
            </div>
            <div className='text-white/80 dark:text-gray-300'>
              Cities Covered
            </div>
          </div>
          <div className='bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20 dark:border-gray-700/50'>
            <div className='text-3xl font-bold text-white dark:text-gray-100 mb-2'>
              99.9%
            </div>
            <div className='text-white/80 dark:text-gray-300'>
              Accuracy Rate
            </div>
          </div>
          <div className='bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20 dark:border-gray-700/50'>
            <div className='text-3xl font-bold text-white dark:text-gray-100 mb-2'>
              24/7
            </div>
            <div className='text-white/80 dark:text-gray-300'>Live Updates</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
