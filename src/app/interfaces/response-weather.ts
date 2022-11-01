export interface ResponseWeather {
  city: ResponseWeatherCity;
  cnt: number;
  cod: string;
  message: number;
  list: ResponseWeatherList[];
}
export interface ResponseWeatherCity {
  coord: {};
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise:number;
  sunset:number;
  timezone:number;
}
export interface ResponseWeatherList {
  dt_txt: string;
  main: ResponseWeatherListMain;
  wind: ResponseWeatherListWind;
  weather: ResponseWeatherListFirstWeather[];
  clouds: ResponseWeatherListClouds;
}
export interface ResponseWeatherListMain {
  feels_like: string;
  temp: string;
  temp_max: string;
  temp_min: string;
}
export interface ResponseWeatherListWind {
  speed: number;
  deg: number;
  gust: number;
}
export interface ResponseWeatherListClouds {
  all: number;
}
export interface ResponseWeatherListFirstWeather {
  id: number;
  description: string;
  icon: string;
  main: string;
}
