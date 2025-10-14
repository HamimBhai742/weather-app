export interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number; // m/s
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number; // cloudiness %
  };
  rain?: {
    '1h'?: number;
    '3h'?: number;
  };
  snow?: {
    '1h'?: number;
    '3h'?: number;
  };
  dt: number; // timestamp
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

// One Call API (hourly/daily forecast)
export interface OneCallData {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number; // m/s
    wind_deg: number;
    wind_gust?: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    rain?: {
      '1h'?: number;
    };
    snow?: {
      '1h'?: number;
    };
  };
  hourly: {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust?: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    pop: number; // probability of precipitation (0-1)
    rain?: {
      '1h'?: number;
    };
    snow?: {
      '1h'?: number;
    };
  }[];
  daily: {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: {
      day: number;
      min: number;
      max: number;
      night: number;
      eve: number;
      morn: number;
    };
    feels_like: {
      day: number;
      night: number;
      eve: number;
      morn: number;
    };
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust?: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: number;
    pop: number;
    rain?: number;
    snow?: number;
    uvi: number;
  }[];
  alerts?: {
    sender_name: string;
    event: string;
    start: number;
    end: number;
    description: string;
    tags: string[];
  }[];
}

export interface WeatherForecastItem {
  dt: number; // Unix timestamp
  dt_txt: string; // "2025-10-13 12:00:00"
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level?: number;
    grnd_level?: number;
    humidity: number;
    temp_kf?: number;
  };
  weather: {
    id: number;
    main: string; // e.g. 'Clear'
    description: string; // e.g. 'clear sky'
    icon: string; // e.g. '01n'
  }[];
  clouds: {
    all: number; // cloudiness percentage
  };
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  visibility: number;
  pop?: number; // probability of precipitation
  sys: {
    pod: string; // part of day ('n' or 'd')
  };
}
export interface Iweather {
  id: number;
  main: string; // e.g. 'Clear'
  description: string; // e.g. 'clear sky'
  icon: string; // e.g. '01n'
}

export interface IHourlyForecastCard {
  condition: number;
  isDay: boolean;
  temp: number;
  time: Date;
}

export interface IForecast7DaysCard {
  time: string[]; // ['2025-10-14', ...]
  temperature_2m_max: number[]; // [31.4, 31.2, ...]
  temperature_2m_min: number[]; // [23.8, 22.1, ...]
  precipitation_sum: number[]; // [0, 0, 0, 0.3, ...]
  weathercode: number[]; // [2, 1, 2, 2, 45, 80, 3]
}

export interface ISun {
  time: string[];
  sunrise: string[];
  sunset: string[];
}

export interface IHourlyForecast{
  time: string[]; // ['2025-10-14', ...]
  temperature_2m: number[]; // [31.4, 31.2, ...]
  precipitation: number[]; // [0, 0, 0, 0.3, ...]
  weathercode: number[]; // [2, 1, 2, 2, 45, 80, 3]
}
