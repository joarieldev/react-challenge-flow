import { CityAlt, RawWeather, WeatherAlt } from './types'

export const api = {
  weather: {
    fetch: async (city: CityAlt): Promise<WeatherAlt> => {
      const request = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${
          city.lat
        }&lon=${
          city.lon
        }&appid=${
          import.meta.env.VITE_API_KEY
        }`
      )
      const response: RawWeather = await request.json()
      const {
        0: first,
        8: second,
        16: third,
        24: fourth,
        32: fifth,
      } = response.list

      return {
        city: {
          id: city.id,
          name: city.name,
        },
        forecast: [first, second, third, fourth, fifth].map((forcast) => ({
          date: new Date(forcast.dt * 1000).toLocaleDateString('es-AR'),
          min: Math.round(forcast.main.temp_min - 273.15),
          max: Math.round(forcast.main.temp_max - 273.15),
        })),
      }
    },
  },
}
