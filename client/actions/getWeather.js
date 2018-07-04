export const getWeather = (weather) => {
  return {
    type: 'GET_WEATHER',
    weatherObj: weather.current
  }
}
