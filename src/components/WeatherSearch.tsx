import React, { useState } from 'react';
import Button from './Button';
interface WeatherSearchProps {
  onSearch: (city: string, units: string) => void;
  loading: boolean;
}

export default function WeatherSearch({ onSearch, loading }: WeatherSearchProps) {
  const [city, setCity] = useState('');
  const [units, setUnits] = useState('metric');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(city, units);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <select
        value={units}
        onChange={(e) => setUnits(e.target.value)}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="metric">°C</option>
        <option value="imperial">°F</option>
      </select>
      <Button type="submit" loading={loading} className="px-6 py-2">
        {loading ? 'Loading...' : 'Search'}
      </Button>
    </form>
  );
}