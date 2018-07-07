import React from 'react'
import {connect} from 'react-redux'

import Card from './Card'
import Footer from './Footer'
import Header from './Header'
import Info from './Info'
import WaitIndicator from './WaitIndicator'
import Weather from './Weather'
import {releaseIndicator, destroyIndicator} from '../actions/waitIndicator'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.toggleIndicator = this.toggleIndicator.bind(this)
  }
  componentDidMount () {  
    this.toggleIndicator()
  }

  toggleIndicator () {
    this.props.dispatch(releaseIndicator())
        setTimeout(() =>{
            this.props.dispatch(destroyIndicator())
          }, 1000)
  }

  render () {
    if (!this.props.waitIndicator && this.props.getWeather) {
      return(
        <div className='app-container'>
        <Weather />
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
                <Weather />
           <WaitIndicator />
        </div>
      )
    }

  }

}

const mapStateToProps = (state) => {
  return {
      waitIndicator: state.waitIndicator,
      getWeather: state.getWeather
  }
}

export default connect(mapStateToProps)(App)
