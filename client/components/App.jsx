import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import Footer from './Footer'
import Header from './Header'
import Info from './Info'
import WaitIndicator from './WaitIndicator'

import { releaseIndicator, destroyIndicator } from '../actions/waitIndicator'
import { getWeather } from '../actions/weather'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.toggleIndicator = this.toggleIndicator.bind(this)
  }

  componentDidMount() {
    this.props.getWeather()
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
          <div className='background' />
          <Header />
          <div className='body-container'>
            <Info />
            <Card />
          </div>
          <Footer />
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
