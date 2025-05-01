'use client';

import { useState } from 'react';
import WeatherSearch from './WeatherSearch';
import WeatherDisplay from './WeatherDisplay';
import { WeatherData } from '@/types/weather';

export default function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string, units: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}&units=${units}`);
      if (!response.ok) {
        throw new Error(await response.text());
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
      <WeatherSearch onSearch={handleSearch} loading={loading} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}