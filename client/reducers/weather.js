const initialState = {
  weather_descriptions: [' '] 
}

const weather = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_WEATHER':
      return action.weather
    default:
      return state
  }
}

export default weather
