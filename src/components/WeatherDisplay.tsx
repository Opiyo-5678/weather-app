import React from 'react'
import { WeatherData } from '@/types/weather'

interface WeatherDisplayProps {
  data: WeatherData
}

export default function WeatherDisplay({ data }: WeatherDisplayProps) {
  const tempUnit = data.units === 'metric' ? '°C' : '°F'
  const windUnit = data.units === 'metric' ? 'm/s' : 'mph'

  
  const cardClasses =
    'p-4 bg-white dark:bg-neutral-900 rounded-2xl shadow-md'

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      
      <div className={cardClasses}>
        <h2 className="text-xl font-semibold">
          {data.name}, {data.sys.country}
        </h2>
        <div className="flex items-center mt-2">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={`Icon for ${data.weather[0].description}`}
            className="w-16 h-16"
          />
          <span className="text-4xl font-bold ml-2">
            {Math.round(data.main.temp)}
            {tempUnit}
          </span>
        </div>
        <p className="capitalize mt-1">{data.weather[0].description}</p>
      </div>

      
      <div className={cardClasses}>
        <h3 className="font-medium mb-2">Weather Details</h3>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-sm text-gray-500">Feels Like</p>
            <p>
              {Math.round(data.main.feels_like)}
              {tempUnit}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Humidity</p>
            <p>{data.main.humidity}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Wind Speed</p>
            <p>
              {data.wind.speed} {windUnit}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Pressure</p>
            <p>{data.main.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  )
}
