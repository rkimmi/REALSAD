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
      .get(`http://api.weatherstack.com/current?access_key=${apiKey}`)
      .set('Accept', 'application/json')
      .then(res => {
        dispatch(receiveWeather(res.body.current))
        return res.data
      })
      .catch((e) => {
        console.error(e);
      })
  }
}

export function receiveWeather(weather) {
  return {
    type: 'RECEIVE_WEATHER',
    weather
  }
}
