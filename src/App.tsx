import { useEffect, useState } from 'react'
import { api } from './api'
import { CityAlt, WeatherAlt } from './types'

const CITIES: Record<string, CityAlt> = {
  bsar: {
    id: 'bs-ar',
    name: 'Bs. As.',
    lat: -34.6157129,
    lon: -58.5981051,
  },
  cordoba: {
    id: 'cordoba',
    name: 'Cordoba',
    lat: -32.47298,
    lon: -68.0972914,
  },
  jujuy: {
    id: 'jujuy',
    name: 'Jujuy',
    lat: -23.1751717,
    lon: -68.3224852,
  },
  tucuman: {
    id: 'tucuman',
    name: 'Tucuman',
    lat: -26.8328589,
    lon: -65.2225937,
  },
  misiones: {
    id: 'misiones',
    name: 'Misiones',
    lat: -26.8240001,
    lon: -56.1672424,
  },
}

function App() {
  const [status, setStatus] = useState<'pending' | 'success'>('pending')
  const [weather, setWeather] = useState<WeatherAlt | null>(null)
  const [city, setCity] = useState<CityAlt>(CITIES['bsar'])

  const handleChangeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(CITIES[e.target.value as keyof typeof CITIES])
  }

  useEffect(() => {
    api.weather.fetch(city).then((data) => {
      setWeather(data)
      setStatus('success')
    })
  }, [city])

  if (status === 'pending') {
    return <div>Cargando...</div>
  }
  if (!weather) {
    return <div>La ciudad no existe o no hay datos del clima</div>
  }

  console.log(weather.forecast.length)

  return (
    <main>
      <select onChange={handleChangeCity} value={city.id}>
        {Object.values(CITIES).map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
      <h1>{weather.city.name}</h1>
      <ul>
        {weather.forecast.map((forecast, index) => (
          <li key={index}>
            {forecast.date}: Min:{forecast.min} °C, Max:{forecast.max} °C
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
