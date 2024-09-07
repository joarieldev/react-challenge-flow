import { expect, test, describe } from 'vitest'
import { formatWeather, kelvinToCelcius } from '../lib/api'
import { WeatherAlt } from '../lib/types'
import { RESPONSE } from '../lib/mocks'

describe('kelvinToCelcius', () => {
  test('should convert temperature from kelvin to celcius', () => {
    expect(kelvinToCelcius(297.59)).toBe(24)
    expect(kelvinToCelcius(299)).toBe(26)
  })
})

describe('formatWeather', () => {
  test('should formater raw weather correctly', () => {
    const actual = formatWeather(RESPONSE)
    const expected: WeatherAlt = {
      city: {
        id: '3860259',
        name: 'Córdoba',
      },
      forecast: [
        { icon: '02n', date: '7/9/2024', min: 12, max: 13 },
        { icon: '04n', date: '8/9/2024', min: 16, max: 16 },
        { icon: '03n', date: '9/9/2024', min: 16, max: 16 },
        { icon: '04n', date: '10/9/2024', min: 19, max: 19 },
        { icon: '04n', date: '11/9/2024', min: 14, max: 14 },
      ],
    }
    expect(actual).toStrictEqual(expected)
  })
})
