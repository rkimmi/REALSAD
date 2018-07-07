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
            console.log('hi')
          }, 5000)
  }

  render () {
    if (!this.props.waitIndicator) {
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

export default connect(mapStateToProps)(App)
