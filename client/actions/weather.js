import request from 'superagent'

const apiKey = process.env.WEATHER_API_KEY


export function requestWeather() {
  return {
    type: 'REQUEST_WEATHER'
  }
}

export function getWeather() {
  return dispatch => {
    dispatch(requestWeather())
    return request
      .get(`https://api.apixu.com/v1/current.json?key=${apiKey}`)
      .set('Accept', 'application/json')
      .then(res => {
        dispatch(receiveWeather(res.body.current))
        return res.data
      })
  }
}

export function receiveWeather(weather) {
  return {
    type: 'RECEIVE_WEATHER',
    weather
  }
}
