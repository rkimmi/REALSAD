import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers'
import App from './components/App'

const store = createStore(reducers,
  compose(applyMiddleware(
    thunkMiddleware
  ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
