import { combineReducers } from 'redux'

import weather from './weather'
import waitIndicator from './waitIndicator'

export default combineReducers({
  weather,
  waitIndicator
})
