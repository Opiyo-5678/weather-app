
import type { NextApiRequest, NextApiResponse } from 'next'
import type { WeatherData } from '@/types/weather'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherData | { error: string }>
) {
  const { city, units = 'metric' } = req.query

  if (!city || typeof city !== 'string') {
    return res
      .status(400)
      .json({ error: 'Missing or invalid `city` query parameter' })
  }

  const apiKey = process.env.OPENWEATHER_API_KEY
  if (!apiKey) {
    return res
      .status(500)
      .json({ error: 'Server misconfiguration: missing API key' })
  }

  const url = new URL('https://api.openweathermap.org/data/2.5/weather')
  url.searchParams.set('q', city)
  url.searchParams.set('units', String(units))
  url.searchParams.set('appid', apiKey)

  try {
    const owmRes = await fetch(url.toString())
    if (!owmRes.ok) {
      
      return res
        .status(owmRes.status)
        .json({ error: `OpenWeatherMap error: ${owmRes.statusText}` })
    }
    const data = (await owmRes.json()) as WeatherData
    data.units = String(units)
    return res.status(200).json(data)
  } catch (err: any) {
    return res
      .status(503)
      .json({ error: `Failed to fetch weather: ${err.message}` })
  }
}
