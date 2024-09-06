import { CityAlt, RawWeather, WeatherAlt } from './types'

export const kelvinToCelcius = (temp: number): number => {
  return Math.round(temp - 273.15)
}

export const formatWeather = (weather: RawWeather): WeatherAlt => {
  const { 0: first, 8: second, 16: third, 24: fourth, 32: fifth } = weather.list
  return {
    city: {
      id: String(weather.city.id),
      name: weather.city.name,
    },
    forecast: [first, second, third, fourth, fifth].map((forcast) => ({
      date: new Date(forcast.dt * 1000).toLocaleDateString('es-AR'),
      min: kelvinToCelcius(forcast.main.temp_min),
      max: kelvinToCelcius(forcast.main.temp_max),
    })),
  }
}

export const api = {
  weather: {
    fetch: async (city: CityAlt): Promise<WeatherAlt> => {
      const request = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${
          city.lon
        }&appid=${import.meta.env.VITE_API_KEY}`
      )
      const response: RawWeather = await request.json()

      return formatWeather(response)
    },
  },
}
