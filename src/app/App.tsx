import { useEffect, useState } from 'react'
import { api } from '../lib/api'
import { CityAlt, WeatherAlt } from '../lib/types'
import { CITIES } from '../lib/mocks'
import './App.css'

function App() {
  const [status, setStatus] = useState<'pending' | 'success'>('pending')
  const [weather, setWeather] = useState<WeatherAlt | null>(null)
  const [city, setCity] = useState<CityAlt>(CITIES['bsas'])

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
    return <div className="container">Cargando...</div>
  }

  if (!weather) {
    return <div className="container">La ciudad no existe o no hay datos del clima</div>
  }

  console.log(weather)

  return (
    <main className="container">
      <select className="city" onChange={handleChangeCity} value={city.id}>
        {Object.values(CITIES).map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
      <h1 className="title">{weather.city.name}</h1>
      <h3 className="sub-title">Pronostico de 5 dias:</h3>
      <ul className="forecast">
        {weather.forecast.map((forecast, index) => (
          <li className="forecast-item" key={index}>
            <p className="date">{forecast.date} </p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.icon}@2x.png`}
              alt={forecast.icon}
              width={50}
            />
            <p className="celsius">
              <small>Min </small>{forecast.min} /
              <small> Max </small>{forecast.max} °C
            </p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
