import { useEffect, useState } from 'react'
import { api } from './api'
import { CityAlt, WeatherAlt } from './types'

const CITIES: Record<string, CityAlt> = {
  bsar: {
    id: 'bs-as',
    name: 'Bs. As.',
    lat: -34.6131500,
    lon: -58.3772300,
  },
  cordoba: {
    id: 'cordoba',
    name: 'Córdoba',
    lat: -31.4135000,
    lon: -64.1810500,
  },
  jujuy: {
    id: 'jujuy',
    name: 'Jujuy',
    lat: -24.1945700,
    lon: -65.2971200,
  },
  tucuman: {
    id: 'tucuman',
    name: 'Tucumán',
    lat: -27.0000000,
    lon: -65.5000000,
  },
  misiones: {
    id: 'misiones',
    name: 'Misiones',
    lat: -27.3670800,
    lon: -55.8960800,
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

  // console.log(weather)

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
