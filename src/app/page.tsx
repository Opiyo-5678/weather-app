import WeatherDashboard from '@/components/WeatherDashboard';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-8">Weather Forecast</h1>
        <WeatherDashboard />
      </div>
    </main>
  );
}