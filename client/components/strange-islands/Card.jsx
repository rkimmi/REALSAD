import React from 'react'
import { connect } from 'react-redux'

import allQuotes from './allQuotes.json'
import allImages from './allImages.json'
import _ from 'lodash'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postcardShowing: false,
      image: null,
      quote: null,
      layersAmount: 0,
      condition: '',
      clothing: ''
    }
    this.toggleCard = this.toggleCard.bind(this)
    this.getQuote = this.getQuote.bind(this)
    this.getImage = this.getImage.bind(this)
    this.setWeather = this.setWeather.bind(this)
    this.handleDblClick = this.handleDblClick.bind(this)
  }

  componentWillMount() {
    this.getQuote()
    this.getImage()
    this.setWeather()
  }

  handleDblClick() {
    this.forceUpdate()
  }

  toggleCard() {
    const { postcardShowing } = this.state
    postcardShowing ?
      this.setState({
        postcardShowing: false
      }) :
      this.setState({
        postcardShowing: true
      })
  }

  getImage() {
    const randomImage = _.sample(allImages.images)
    this.setState({ image: randomImage })
  }

  getQuote() {
    const randomQuote = _.sample(allQuotes.quotes)
    this.setState({ quote: randomQuote.text })
  }

  setWeather() {
    const { weather } = this.props
    const condition = weather.condition.text
    const newCondition = _.lowerCase(condition)
    let dc = weather.temp_c
    let clothing = 4
    switch (true) {
      case (dc >= 4 && dc <= 9):
        clothing = 4
        break
      case (dc >= 9 && dc <= 14):
        clothing = 3
        break
      case (dc >= 14 && dc <= 19):
        clothing = 2
        break
      case (dc >= 19 && dc <= 23):
        clothing = 1
        break
      default:
        clothing = 2
    }
    this.setState({ condition: newCondition, clothing })
  }
  render() {
    const { postcardShowing, image, quote, condition, clothing } = this.state
    const { weather } = this.props
    const style = { backgroundImage: `url(${image})` }
    if (!postcardShowing) {
      return (
        <div className='card-container' onClick={this.toggleCard}>
          <div className='card' style={style} alt='' />
          <div className='quote-container' >
            <h1 className='quote'>
              {quote}
            </h1>
          </div>
        </div>
      )
    }
    return (
      <div className='card-container' onClick={this.toggleCard}>
        <div className='postcard' >
          <div className='p-left-container'>
            <p className='note-timestamp'> <b className='p-small'>{weather.last_updated}</b> </p>
            <div className='text-box'>
              <div className='p-text'>
                Dear Angel, <br /><br />
                At <b className='p-bold'>WELLBEING ANALYSIS TECHNIQUES LIMITED </b>, we recognise the positive and negative effects that the climate has on our health. <br /> <br />
                The condition is {condition} in <b className='p-bold'>AUCKLAND CITY</b> today, and currently {weather.temp_c} degrees Celsius.
                             <b className='p-bold'> WELLBEING ANALYSIS TECHNIQUES LIMITED</b> recommends wearing at least {clothing} layers of clothing. <br /> <br />
                And remember, <br />
                <p className='dyk-quote'><i>{quote}</i></p>
                <br />xoxo
                </div>
            </div>
          </div>
          <div className='p-vertical-line' />
          <div className='text-box-right'>
            <div className='p-top-right'>
              <div className='p-top-right-logo' >
                <img className='p-logo' src='./images/charcoalbaby.png' />
              </div>
              <div className='p-top-right-lines'>
                <div className='p-horizontal-line' />
                <div className='p-horizontal-line' />
                <div className='p-horizontal-line' />
              </div>
            </div>
            <div className='p-bottom-right'>
              <div className='p-long-horizontal-line' />
              <div className='p-long-horizontal-line' />
              <div className='p-long-horizontal-line' />
              <div className='p-long-horizontal-line' />
            </div>
          </div>
          <div className='postcard-text' />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}


export default connect(mapStateToProps)(Card)
