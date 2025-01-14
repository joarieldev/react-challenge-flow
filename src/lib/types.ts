export type CityAlt = {
  id: string
  name: string
  lat: number
  lon: number
}
export type WeatherAlt = {
  city: {
    id: string
    name: string
  }
  forecast: {
    icon: string
    date: string
    min: number
    max: number
  }[]
}

export interface RawWeather {
  cod: string
  message: number
  cnt: number
  list: List[]
  city: City
}

export interface City {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

export interface Coord {
  lat: number
  lon: number
}

export interface List {
  dt: number
  main: Main
  weather: Weather[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  rain?: Rain
  sys: Sys
  dt_txt: Date
}

export interface Clouds {
  all: number
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

export interface Rain {
  '3h': number
}

export interface Sys {
  pod: string
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Wind {
  speed: number
  deg: number
  gust: number
}
