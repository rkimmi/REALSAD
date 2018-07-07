import {combineReducers} from 'redux'

import getWeather from './getWeather'
import waitIndicator from './waitIndicator'

export default combineReducers({
  getWeather,
  waitIndicator
})
