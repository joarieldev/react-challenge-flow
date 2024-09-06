import { expect, test, describe } from 'vitest'
import { formatWeather, kelvinToCelcius } from '../api'
import { RawWeather, WeatherAlt } from '../types'

describe('kelvinToCelcius', () => {
  test('should convert temperature from kelvin to celcius', () => {
    expect(kelvinToCelcius(297.59)).toBe(24)
    expect(kelvinToCelcius(299)).toBe(26)
  })
})

describe('formatWeather', () => {
  const RESPONSE: RawWeather = {
    cod: '200',
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1725656400,
        main: {
          temp: 298.78,
          feels_like: 297.89,
          temp_min: 297.7,
          temp_max: 298.78,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 951,
          humidity: 19,
          temp_kf: 1.08,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 96,
        },
        wind: {
          speed: 3.41,
          deg: 123,
          gust: 3.3,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-06 )21:00:00'),
      },
      {
        dt: 1725667200,
        main: {
          temp: 293.47,
          feels_like: 292.26,
          temp_min: 290.55,
          temp_max: 293.47,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 954,
          humidity: 27,
          temp_kf: 2.92,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 63,
        },
        wind: {
          speed: 2.21,
          deg: 184,
          gust: 4.09,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-07 )00:00:00'),
      },
      {
        dt: 1725678000,
        main: {
          temp: 288.24,
          feels_like: 286.77,
          temp_min: 288.24,
          temp_max: 288.24,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 956,
          humidity: 37,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n',
          },
        ],
        clouds: {
          all: 14,
        },
        wind: {
          speed: 2.71,
          deg: 215,
          gust: 4.48,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-07 03:00:00'),
      },
      {
        dt: 1725688800,
        main: {
          temp: 286.45,
          feels_like: 284.93,
          temp_min: 286.45,
          temp_max: 286.45,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 956,
          humidity: 42,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n',
          },
        ],
        clouds: {
          all: 14,
        },
        wind: {
          speed: 1.73,
          deg: 191,
          gust: 2.51,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-07 06:00:00'),
      },
      {
        dt: 1725699600,
        main: {
          temp: 285.41,
          feels_like: 283.87,
          temp_min: 285.41,
          temp_max: 285.41,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 956,
          humidity: 45,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 61,
        },
        wind: {
          speed: 1.97,
          deg: 231,
          gust: 2.77,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-07 09:00:00'),
      },
      {
        dt: 1725710400,
        main: {
          temp: 288.87,
          feels_like: 287.46,
          temp_min: 288.87,
          temp_max: 288.87,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 957,
          humidity: 37,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 55,
        },
        wind: {
          speed: 1.56,
          deg: 240,
          gust: 2.47,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-07 12:00:00'),
      },
      {
        dt: 1725721200,
        main: {
          temp: 295.01,
          feels_like: 293.98,
          temp_min: 295.01,
          temp_max: 295.01,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 956,
          humidity: 28,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 7,
        },
        wind: {
          speed: 2.98,
          deg: 56,
          gust: 4.16,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-07 15:00:00'),
      },
      {
        dt: 1725732000,
        main: {
          temp: 299.12,
          feels_like: 299.12,
          temp_min: 299.12,
          temp_max: 299.12,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 953,
          humidity: 22,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 8,
        },
        wind: {
          speed: 4.05,
          deg: 54,
          gust: 4.82,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-07 18:00:00'),
      },
      {
        dt: 1725742800,
        main: {
          temp: 298.73,
          feels_like: 297.94,
          temp_min: 298.73,
          temp_max: 298.73,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 953,
          humidity: 23,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 56,
        },
        wind: {
          speed: 4.26,
          deg: 63,
          gust: 4.71,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-07 21:00:00'),
      },
      {
        dt: 1725753600,
        main: {
          temp: 292.87,
          feels_like: 291.81,
          temp_min: 292.87,
          temp_max: 292.87,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 956,
          humidity: 35,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 78,
        },
        wind: {
          speed: 2,
          deg: 355,
          gust: 2.65,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-08 00:00:00'),
      },
      {
        dt: 1725764400,
        main: {
          temp: 290.19,
          feels_like: 289.1,
          temp_min: 290.19,
          temp_max: 290.19,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 958,
          humidity: 44,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 71,
        },
        wind: {
          speed: 1.5,
          deg: 44,
          gust: 3.27,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-08 03:00:00'),
      },
      {
        dt: 1725775200,
        main: {
          temp: 288.5,
          feels_like: 287.5,
          temp_min: 288.5,
          temp_max: 288.5,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 958,
          humidity: 54,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 57,
        },
        wind: {
          speed: 1.1,
          deg: 175,
          gust: 1.17,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-08 06:00:00'),
      },
      {
        dt: 1725786000,
        main: {
          temp: 286.36,
          feels_like: 285.51,
          temp_min: 286.36,
          temp_max: 286.36,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 959,
          humidity: 68,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.28,
          deg: 126,
          gust: 1.7,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-08 09:00:00'),
      },
      {
        dt: 1725796800,
        main: {
          temp: 288.65,
          feels_like: 287.85,
          temp_min: 288.65,
          temp_max: 288.65,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 961,
          humidity: 61,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.46,
          deg: 199,
          gust: 0.47,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-08 12:00:00'),
      },
      {
        dt: 1725807600,
        main: {
          temp: 294.85,
          feels_like: 294.15,
          temp_min: 294.85,
          temp_max: 294.85,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 959,
          humidity: 41,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.79,
          deg: 29,
          gust: 1.68,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-08 15:00:00'),
      },
      {
        dt: 1725818400,
        main: {
          temp: 298.63,
          feels_like: 298.02,
          temp_min: 298.63,
          temp_max: 298.63,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 956,
          humidity: 30,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 92,
        },
        wind: {
          speed: 3.34,
          deg: 64,
          gust: 3.56,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-08 18:00:00'),
      },
      {
        dt: 1725829200,
        main: {
          temp: 298.39,
          feels_like: 297.75,
          temp_min: 298.39,
          temp_max: 298.39,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 955,
          humidity: 30,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 75,
        },
        wind: {
          speed: 3.77,
          deg: 76,
          gust: 3.49,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-08 21:00:00'),
      },
      {
        dt: 1725840000,
        main: {
          temp: 292.62,
          feels_like: 291.77,
          temp_min: 292.62,
          temp_max: 292.62,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 957,
          humidity: 44,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 53,
        },
        wind: {
          speed: 1.55,
          deg: 46,
          gust: 2.64,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-09 00:00:00'),
      },
      {
        dt: 1725850800,
        main: {
          temp: 290.31,
          feels_like: 289.44,
          temp_min: 290.31,
          temp_max: 290.31,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 958,
          humidity: 52,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n',
          },
        ],
        clouds: {
          all: 16,
        },
        wind: {
          speed: 1.12,
          deg: 30,
          gust: 1.4,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-09 03:00:00'),
      },
      {
        dt: 1725861600,
        main: {
          temp: 289.04,
          feels_like: 288.23,
          temp_min: 289.04,
          temp_max: 289.04,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 957,
          humidity: 59,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 60,
        },
        wind: {
          speed: 1.11,
          deg: 24,
          gust: 1.56,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-09 06:00:00'),
      },
      {
        dt: 1725872400,
        main: {
          temp: 287.68,
          feels_like: 286.89,
          temp_min: 287.68,
          temp_max: 287.68,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 956,
          humidity: 65,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 81,
        },
        wind: {
          speed: 2.02,
          deg: 240,
          gust: 2.24,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-09 09:00:00'),
      },
      {
        dt: 1725883200,
        main: {
          temp: 291.11,
          feels_like: 290.32,
          temp_min: 291.11,
          temp_max: 291.11,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 958,
          humidity: 52,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 70,
        },
        wind: {
          speed: 0.51,
          deg: 18,
          gust: 0.78,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-09 12:00:00'),
      },
      {
        dt: 1725894000,
        main: {
          temp: 297,
          feels_like: 296.43,
          temp_min: 297,
          temp_max: 297,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 957,
          humidity: 38,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 62,
        },
        wind: {
          speed: 2.4,
          deg: 48,
          gust: 1.74,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-09 15:00:00'),
      },
      {
        dt: 1725904800,
        main: {
          temp: 300.98,
          feels_like: 300.08,
          temp_min: 300.98,
          temp_max: 300.98,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 954,
          humidity: 29,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 56,
        },
        wind: {
          speed: 2.34,
          deg: 93,
          gust: 1.99,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-09 18:00:00'),
      },
      {
        dt: 1725915600,
        main: {
          temp: 301.05,
          feels_like: 300.09,
          temp_min: 301.05,
          temp_max: 301.05,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 954,
          humidity: 28,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 59,
        },
        wind: {
          speed: 2.99,
          deg: 101,
          gust: 2.88,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-09 21:00:00'),
      },
      {
        dt: 1725926400,
        main: {
          temp: 294.83,
          feels_like: 294.18,
          temp_min: 294.83,
          temp_max: 294.83,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 956,
          humidity: 43,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 78,
        },
        wind: {
          speed: 2.02,
          deg: 67,
          gust: 3.87,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-10 00:00:00'),
      },
      {
        dt: 1725937200,
        main: {
          temp: 292.87,
          feels_like: 292.2,
          temp_min: 292.87,
          temp_max: 292.87,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 956,
          humidity: 50,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.55,
          deg: 348,
          gust: 1.55,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-10 03:00:00'),
      },
      {
        dt: 1725948000,
        main: {
          temp: 291.4,
          feels_like: 290.74,
          temp_min: 291.4,
          temp_max: 291.4,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 954,
          humidity: 56,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 89,
        },
        wind: {
          speed: 1.08,
          deg: 19,
          gust: 1.19,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-10 06:00:00'),
      },
      {
        dt: 1725958800,
        main: {
          temp: 290.26,
          feels_like: 289.67,
          temp_min: 290.26,
          temp_max: 290.26,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 952,
          humidity: 63,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.82,
          deg: 7,
          gust: 2.6,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-10 09:00:00'),
      },
      {
        dt: 1725969600,
        main: {
          temp: 292.73,
          feels_like: 292.31,
          temp_min: 292.73,
          temp_max: 292.73,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 952,
          humidity: 60,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.76,
          deg: 2,
          gust: 5.28,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-10 12:00:00'),
      },
      {
        dt: 1725980400,
        main: {
          temp: 298.6,
          feels_like: 298.4,
          temp_min: 298.6,
          temp_max: 298.6,
          pressure: 1005,
          sea_level: 1005,
          grnd_level: 950,
          humidity: 46,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 6.37,
          deg: 33,
          gust: 7.92,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-10 15:00:00'),
      },
      {
        dt: 1725991200,
        main: {
          temp: 305.38,
          feels_like: 304.11,
          temp_min: 305.38,
          temp_max: 305.38,
          pressure: 999,
          sea_level: 999,
          grnd_level: 944,
          humidity: 29,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.69,
          deg: 1,
          gust: 7.64,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-10 18:00:00'),
      },
      {
        dt: 1726002000,
        main: {
          temp: 305.12,
          feels_like: 303.52,
          temp_min: 305.12,
          temp_max: 305.12,
          pressure: 997,
          sea_level: 997,
          grnd_level: 942,
          humidity: 26,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 98,
        },
        wind: {
          speed: 5.01,
          deg: 328,
          gust: 7.67,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-10 21:00:00'),
      },
      {
        dt: 1726012800,
        main: {
          temp: 298.89,
          feels_like: 298.72,
          temp_min: 298.89,
          temp_max: 298.89,
          pressure: 1000,
          sea_level: 1000,
          grnd_level: 944,
          humidity: 46,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 4.87,
          deg: 320,
          gust: 10.04,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-11 00:00:00'),
      },
      {
        dt: 1726023600,
        main: {
          temp: 296.36,
          feels_like: 296.07,
          temp_min: 296.36,
          temp_max: 296.36,
          pressure: 1001,
          sea_level: 1001,
          grnd_level: 946,
          humidity: 51,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 98,
        },
        wind: {
          speed: 3.31,
          deg: 291,
          gust: 7.2,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-11 03:00:00'),
      },
      {
        dt: 1726034400,
        main: {
          temp: 290.65,
          feels_like: 289.81,
          temp_min: 290.65,
          temp_max: 290.65,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 952,
          humidity: 52,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 98,
        },
        wind: {
          speed: 9.26,
          deg: 183,
          gust: 16.16,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-11 06:00:00'),
      },
      {
        dt: 1726045200,
        main: {
          temp: 286.57,
          feels_like: 284.93,
          temp_min: 286.57,
          temp_max: 286.57,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 956,
          humidity: 37,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 7.85,
          deg: 192,
          gust: 14.59,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: new Date('2024-09-11 09:00:00'),
      },
      {
        dt: 1726056000,
        main: {
          temp: 286.3,
          feels_like: 284.19,
          temp_min: 286.3,
          temp_max: 286.3,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 960,
          humidity: 20,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 8.19,
          deg: 189,
          gust: 14.73,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-11 12:00:00'),
      },
      {
        dt: 1726066800,
        main: {
          temp: 290.82,
          feels_like: 288.93,
          temp_min: 290.82,
          temp_max: 290.82,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 960,
          humidity: 11,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 8.54,
          deg: 173,
          gust: 11.77,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-11 15:00:00'),
      },
      {
        dt: 1726077600,
        main: {
          temp: 294.39,
          feels_like: 292.78,
          temp_min: 294.39,
          temp_max: 294.39,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 959,
          humidity: 8,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 88,
        },
        wind: {
          speed: 6.56,
          deg: 164,
          gust: 7.8,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: new Date('2024-09-11 18:00:00'),
      },
    ],
    city: {
      id: 3860259,
      name: 'Córdoba',
      coord: {
        lat: -31.4135,
        lon: -64.1811,
      },
      country: 'AR',
      population: 1428214,
      timezone: -10800,
      sunrise: 1725618387,
      sunset: 1725660228,
    },
  }
  test('should formater raw weather correctly', () => {
    const actual = formatWeather(RESPONSE)
    const expected: WeatherAlt = {
      city: {
        id: '3860259',
        name: 'Córdoba',
      },
      forecast: [
        { date: '6/9/2024', min: 25, max: 26 },
        { date: '7/9/2024', min: 26, max: 26 },
        { date: '8/9/2024', min: 25, max: 25 },
        { date: '9/9/2024', min: 28, max: 28 },
        { date: '10/9/2024', min: 32, max: 32 },
      ],
    }
    expect(actual).toStrictEqual(expected)
  })
})
