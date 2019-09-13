import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import WaitIndicator from './WaitIndicator'

import { releaseIndicator, destroyIndicator } from '../actions/waitIndicator'
import { getWeather } from '../actions/weather'
import StrangeIslands from './strange-islands/StrangeIslands'

import Home from './Home'
import About from './About'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.toggleIndicator = this.toggleIndicator.bind(this)
  }

  componentDidMount() {
    this.toggleIndicator()
  }

  toggleIndicator() {
    this.props.releaseIndicator() // changed - only destroy if have weatherObj
    setTimeout(() => {
      this.props.destroyIndicator()
    }, 5000)
  }

  render() {
    const { waitIndicator } = this.props
    if (!waitIndicator) {
      return (
        <div className='app-container'>
          <Route path='/strangeislands' component={StrangeIslands} />
          <Route path='/about' component={About} />
          <Route exact path='/' component={Home} />
        </div>
      )
    } else {
      return (
        <div className='app-container'>
          <WaitIndicator />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    waitIndicator: state.waitIndicator
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWeather: () => dispatch(getWeather()),
    releaseIndicator: () => dispatch(releaseIndicator()),
    destroyIndicator: () => dispatch(destroyIndicator())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
