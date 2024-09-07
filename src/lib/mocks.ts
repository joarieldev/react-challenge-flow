import { CityAlt, RawWeather } from "./types";

export const CITIES: Record<string, CityAlt> = {
  bsas: {
    id: 'bsas',
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
  }
}

export const RESPONSE: RawWeather = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
      {
          "dt": 1725688800,
          "main": {
              "temp": 285.44,
              "feels_like": 283.82,
              "temp_min": 285.44,
              "temp_max": 286.57,
              "pressure": 1013,
              "sea_level": 1013,
              "grnd_level": 956,
              "humidity": 42,
              "temp_kf": -1.13
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 12
          },
          "wind": {
              "speed": 1.6,
              "deg": 191,
              "gust": 2.42
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-07 06:00:00")
      },
      {
          "dt": 1725699600,
          "main": {
              "temp": 285.27,
              "feels_like": 283.69,
              "temp_min": 285.27,
              "temp_max": 285.47,
              "pressure": 1013,
              "sea_level": 1013,
              "grnd_level": 956,
              "humidity": 44,
              "temp_kf": -0.2
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 46
          },
          "wind": {
              "speed": 2.02,
              "deg": 227,
              "gust": 2.89
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-07 09:00:00")
      },
      {
          "dt": 1725710400,
          "main": {
              "temp": 288.82,
              "feels_like": 287.41,
              "temp_min": 288.82,
              "temp_max": 288.82,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 957,
              "humidity": 37,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 55
          },
          "wind": {
              "speed": 1.67,
              "deg": 227,
              "gust": 2.42
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-07 12:00:00")
      },
      {
          "dt": 1725721200,
          "main": {
              "temp": 294.96,
              "feels_like": 293.95,
              "temp_min": 294.96,
              "temp_max": 294.96,
              "pressure": 1013,
              "sea_level": 1013,
              "grnd_level": 956,
              "humidity": 29,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 33
          },
          "wind": {
              "speed": 2.64,
              "deg": 63,
              "gust": 3.55
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-07 15:00:00")
      },
      {
          "dt": 1725732000,
          "main": {
              "temp": 298.74,
              "feels_like": 297.96,
              "temp_min": 298.74,
              "temp_max": 298.74,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 953,
              "humidity": 23,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 18
          },
          "wind": {
              "speed": 3.58,
              "deg": 48,
              "gust": 4.53
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-07 18:00:00")
      },
      {
          "dt": 1725742800,
          "main": {
              "temp": 298.93,
              "feels_like": 298.16,
              "temp_min": 298.93,
              "temp_max": 298.93,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 953,
              "humidity": 23,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 14
          },
          "wind": {
              "speed": 4.15,
              "deg": 56,
              "gust": 4.58
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-07 21:00:00")
      },
      {
          "dt": 1725753600,
          "main": {
              "temp": 293.04,
              "feels_like": 291.97,
              "temp_min": 293.04,
              "temp_max": 293.04,
              "pressure": 1013,
              "sea_level": 1013,
              "grnd_level": 956,
              "humidity": 34,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 52
          },
          "wind": {
              "speed": 1.85,
              "deg": 2,
              "gust": 2.21
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-08 00:00:00")
      },
      {
          "dt": 1725764400,
          "main": {
              "temp": 290.54,
              "feels_like": 289.41,
              "temp_min": 290.54,
              "temp_max": 290.54,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 958,
              "humidity": 41,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 63
          },
          "wind": {
              "speed": 1.42,
              "deg": 56,
              "gust": 1.94
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-08 03:00:00")
      },
      {
          "dt": 1725775200,
          "main": {
              "temp": 288.83,
              "feels_like": 287.81,
              "temp_min": 288.83,
              "temp_max": 288.83,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 958,
              "humidity": 52,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 51
          },
          "wind": {
              "speed": 0.91,
              "deg": 142,
              "gust": 1.12
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-08 06:00:00")
      },
      {
          "dt": 1725786000,
          "main": {
              "temp": 286.81,
              "feels_like": 286.01,
              "temp_min": 286.81,
              "temp_max": 286.81,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 959,
              "humidity": 68,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 1.32,
              "deg": 151,
              "gust": 1.62
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-08 09:00:00")
      },
      {
          "dt": 1725796800,
          "main": {
              "temp": 288.69,
              "feels_like": 287.94,
              "temp_min": 288.69,
              "temp_max": 288.69,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 961,
              "humidity": 63,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 1.13,
              "deg": 197,
              "gust": 0.99
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-08 12:00:00")
      },
      {
          "dt": 1725807600,
          "main": {
              "temp": 294.9,
              "feels_like": 294.25,
              "temp_min": 294.9,
              "temp_max": 294.9,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 959,
              "humidity": 43,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 1.43,
              "deg": 85,
              "gust": 1.94
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-08 15:00:00")
      },
      {
          "dt": 1725818400,
          "main": {
              "temp": 298.18,
              "feels_like": 297.57,
              "temp_min": 298.18,
              "temp_max": 298.18,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 956,
              "humidity": 32,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 2.59,
              "deg": 59,
              "gust": 2.96
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-08 18:00:00")
      },
      {
          "dt": 1725829200,
          "main": {
              "temp": 298.23,
              "feels_like": 297.63,
              "temp_min": 298.23,
              "temp_max": 298.23,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 955,
              "humidity": 32,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 3.2,
              "deg": 74,
              "gust": 3.36
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-08 21:00:00")
      },
      {
          "dt": 1725840000,
          "main": {
              "temp": 292.82,
              "feels_like": 292.07,
              "temp_min": 292.82,
              "temp_max": 292.82,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 958,
              "humidity": 47,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 81
          },
          "wind": {
              "speed": 1.51,
              "deg": 47,
              "gust": 2.46
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-09 00:00:00")
      },
      {
          "dt": 1725850800,
          "main": {
              "temp": 290.51,
              "feels_like": 289.74,
              "temp_min": 290.51,
              "temp_max": 290.51,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 958,
              "humidity": 55,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 38
          },
          "wind": {
              "speed": 0.96,
              "deg": 29,
              "gust": 1.22
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-09 03:00:00")
      },
      {
          "dt": 1725861600,
          "main": {
              "temp": 289.38,
              "feels_like": 288.63,
              "temp_min": 289.38,
              "temp_max": 289.38,
              "pressure": 1013,
              "sea_level": 1013,
              "grnd_level": 956,
              "humidity": 60,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 29
          },
          "wind": {
              "speed": 1.39,
              "deg": 340,
              "gust": 1.56
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-09 06:00:00")
      },
      {
          "dt": 1725872400,
          "main": {
              "temp": 287.92,
              "feels_like": 287.28,
              "temp_min": 287.92,
              "temp_max": 287.92,
              "pressure": 1013,
              "sea_level": 1013,
              "grnd_level": 956,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 59
          },
          "wind": {
              "speed": 1.26,
              "deg": 154,
              "gust": 1.23
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-09 09:00:00")
      },
      {
          "dt": 1725883200,
          "main": {
              "temp": 290.53,
              "feels_like": 290.02,
              "temp_min": 290.53,
              "temp_max": 290.53,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 957,
              "humidity": 65,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 68
          },
          "wind": {
              "speed": 1.63,
              "deg": 12,
              "gust": 2.26
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-09 12:00:00")
      },
      {
          "dt": 1725894000,
          "main": {
              "temp": 297.35,
              "feels_like": 296.95,
              "temp_min": 297.35,
              "temp_max": 297.35,
              "pressure": 1013,
              "sea_level": 1013,
              "grnd_level": 956,
              "humidity": 43,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 33
          },
          "wind": {
              "speed": 1.48,
              "deg": 28,
              "gust": 1.78
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-09 15:00:00")
      },
      {
          "dt": 1725904800,
          "main": {
              "temp": 301.56,
              "feels_like": 300.6,
              "temp_min": 301.56,
              "temp_max": 301.56,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 953,
              "humidity": 31,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 59
          },
          "wind": {
              "speed": 2.04,
              "deg": 62,
              "gust": 2.34
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-09 18:00:00")
      },
      {
          "dt": 1725915600,
          "main": {
              "temp": 301.9,
              "feels_like": 300.82,
              "temp_min": 301.9,
              "temp_max": 301.9,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 952,
              "humidity": 30,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 34
          },
          "wind": {
              "speed": 2.64,
              "deg": 96,
              "gust": 3.01
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-09 21:00:00")
      },
      {
          "dt": 1725926400,
          "main": {
              "temp": 295.7,
              "feels_like": 295.24,
              "temp_min": 295.7,
              "temp_max": 295.7,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 954,
              "humidity": 47,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 50
          },
          "wind": {
              "speed": 1.62,
              "deg": 29,
              "gust": 2.4
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-10 00:00:00")
      },
      {
          "dt": 1725937200,
          "main": {
              "temp": 293.5,
              "feels_like": 293.13,
              "temp_min": 293.5,
              "temp_max": 293.5,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 954,
              "humidity": 59,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 96
          },
          "wind": {
              "speed": 1.52,
              "deg": 18,
              "gust": 2.1
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-10 03:00:00")
      },
      {
          "dt": 1725948000,
          "main": {
              "temp": 292.07,
              "feels_like": 291.77,
              "temp_min": 292.07,
              "temp_max": 292.07,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 952,
              "humidity": 67,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 1.9,
              "deg": 3,
              "gust": 2.93
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-10 06:00:00")
      },
      {
          "dt": 1725958800,
          "main": {
              "temp": 290.7,
              "feels_like": 290.44,
              "temp_min": 290.7,
              "temp_max": 290.7,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 949,
              "humidity": 74,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 2.54,
              "deg": 24,
              "gust": 4.26
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-10 09:00:00")
      },
      {
          "dt": 1725969600,
          "main": {
              "temp": 293.33,
              "feels_like": 293.02,
              "temp_min": 293.33,
              "temp_max": 293.33,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 950,
              "humidity": 62,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 2.62,
              "deg": 17,
              "gust": 5.15
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-10 12:00:00")
      },
      {
          "dt": 1725980400,
          "main": {
              "temp": 300.12,
              "feels_like": 300.14,
              "temp_min": 300.12,
              "temp_max": 300.12,
              "pressure": 1003,
              "sea_level": 1003,
              "grnd_level": 948,
              "humidity": 43,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 89
          },
          "wind": {
              "speed": 5.25,
              "deg": 43,
              "gust": 6.75
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-10 15:00:00")
      },
      {
          "dt": 1725991200,
          "main": {
              "temp": 306.99,
              "feels_like": 305.36,
              "temp_min": 306.99,
              "temp_max": 306.99,
              "pressure": 998,
              "sea_level": 998,
              "grnd_level": 943,
              "humidity": 24,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 89
          },
          "wind": {
              "speed": 6.26,
              "deg": 326,
              "gust": 7.74
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-10 18:00:00")
      },
      {
          "dt": 1726002000,
          "main": {
              "temp": 305.83,
              "feels_like": 303.92,
              "temp_min": 305.83,
              "temp_max": 305.83,
              "pressure": 997,
              "sea_level": 997,
              "grnd_level": 942,
              "humidity": 22,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 5.83,
              "deg": 299,
              "gust": 8.31
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-10 21:00:00")
      },
      {
          "dt": 1726012800,
          "main": {
              "temp": 290.84,
              "feels_like": 290.54,
              "temp_min": 290.84,
              "temp_max": 290.84,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 949,
              "humidity": 72,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 10.4,
              "deg": 181,
              "gust": 17.49
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-11 00:00:00")
      },
      {
          "dt": 1726023600,
          "main": {
              "temp": 288.63,
              "feels_like": 288.11,
              "temp_min": 288.63,
              "temp_max": 288.63,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 954,
              "humidity": 72,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 90
          },
          "wind": {
              "speed": 8.08,
              "deg": 193,
              "gust": 14.79
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-11 03:00:00")
      },
      {
          "dt": 1726034400,
          "main": {
              "temp": 287.01,
              "feels_like": 285.86,
              "temp_min": 287.01,
              "temp_max": 287.01,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 957,
              "humidity": 54,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 95
          },
          "wind": {
              "speed": 8.6,
              "deg": 191,
              "gust": 14.3
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-11 06:00:00")
      },
      {
          "dt": 1726045200,
          "main": {
              "temp": 284.77,
              "feels_like": 282.82,
              "temp_min": 284.77,
              "temp_max": 284.77,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 959,
              "humidity": 32,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 7.29,
              "deg": 189,
              "gust": 13.2
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-11 09:00:00")
      },
      {
          "dt": 1726056000,
          "main": {
              "temp": 284.76,
              "feels_like": 282.55,
              "temp_min": 284.76,
              "temp_max": 284.76,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 962,
              "humidity": 22,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 7.31,
              "deg": 195,
              "gust": 13.21
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-11 12:00:00")
      },
      {
          "dt": 1726066800,
          "main": {
              "temp": 289.45,
              "feels_like": 287.53,
              "temp_min": 289.45,
              "temp_max": 289.45,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 962,
              "humidity": 15,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 5.95,
              "deg": 175,
              "gust": 7.99
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-11 15:00:00")
      },
      {
          "dt": 1726077600,
          "main": {
              "temp": 292.7,
              "feels_like": 291.05,
              "temp_min": 292.7,
              "temp_max": 292.7,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 960,
              "humidity": 13,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 4.57,
              "deg": 154,
              "gust": 4.93
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-11 18:00:00")
      },
      {
          "dt": 1726088400,
          "main": {
              "temp": 291.49,
              "feels_like": 289.8,
              "temp_min": 291.49,
              "temp_max": 291.49,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 960,
              "humidity": 16,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 4.57,
              "deg": 141,
              "gust": 4.53
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": new Date("2024-09-11 21:00:00")
      },
      {
          "dt": 1726099200,
          "main": {
              "temp": 286.3,
              "feels_like": 284.38,
              "temp_min": 286.3,
              "temp_max": 286.3,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 962,
              "humidity": 27,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 2.2,
              "deg": 122,
              "gust": 3.99
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-12 00:00:00")
      },
      {
          "dt": 1726110000,
          "main": {
              "temp": 284.65,
              "feels_like": 282.72,
              "temp_min": 284.65,
              "temp_max": 284.65,
              "pressure": 1020,
              "sea_level": 1020,
              "grnd_level": 962,
              "humidity": 33,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 0.52,
              "deg": 320,
              "gust": 0.93
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": new Date("2024-09-12 03:00:00")
      }
  ],
  "city": {
      "id": 3860259,
      "name": "Córdoba",
      "coord": {
          "lat": -31.4135,
          "lon": -64.1811
      },
      "country": "AR",
      "population": 1428214,
      "timezone": -10800,
      "sunrise": 1725704711,
      "sunset": 1725746662
  }
}