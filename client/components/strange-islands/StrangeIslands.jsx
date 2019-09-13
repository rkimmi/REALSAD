import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import Footer from './Footer'
import Header from './Header'
import Info from './Info'
import { getWeather } from '../../actions/weather'


class StrangeIslands extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.getWeather()
  }

  render() {
    return (
      <div>
        <div className='background' />
        <Header />
        <div className='body-container'>
          <Info />
          <Card />
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    waitIndicator: state.waitIndicator
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWeather: () => dispatch(getWeather())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StrangeIslands)
