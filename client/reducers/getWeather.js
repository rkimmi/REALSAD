const getWeather = (state = null, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
      return action.weatherObj
    default:
      return state
  }
}

export default getWeather
