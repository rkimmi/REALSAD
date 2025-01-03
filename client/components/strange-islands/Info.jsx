import React from 'react'

import { connect } from 'react-redux'

import Sound from 'react-sound'
import c from './config'


class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: Sound.status.PAUSED, clicked: false, icon: '',
      sound: '',
      soundName: '',
      nowPlaying: '',
      assocSound: '',
      feelSound: '',
      instrSound: ''
    }
    this.getIconPlusSound = this.getIconPlusSound.bind(this)
    this.playSound = this.playSound.bind(this)
  }

  componentDidMount() {
    this.getIconPlusSound()
  }

  playSound() {
    this.setState({ playing: Sound.status.PLAYING, clicked: true })
  }

  getIconPlusSound() {
    const { weather } = this.props
    let weatherText = weather.weather_descriptions[0].toLowerCase()
    weatherText = weatherText.split(' ')
    let status = ''
    switch (true) {
      case (weatherText.indexOf('shower') >= 0):
        status = 'RAINY'
        break
      case (weatherText.indexOf('rain') >= 0):
        status = 'RAINY'
        break
      case (weatherText.indexOf('storm') >= 0):
        status = 'STORM'
        break
      case (weatherText.indexOf('thunder') >= 0):
        status = 'STORM'
        break
      case (weatherText.indexOf('snow') >= 0):
        status = 'SNOW'
        break
      case (weatherText.indexOf('cast') >= 0):
        status = 'OVERCAST'
        break
      case (weatherText.indexOf('cloudy') >= 0):
        status = 'CLOUDY'
        break
      case (weatherText.indexOf('partly cloudy') >= 0):
        status = 'CLOUDY'
        break
      case (weatherText.indexOf('sunny') >= 0):
        status = 'SUNNY'
        break
      case (weatherText.indexOf('clear') >= 0):
        status = 'SUNNY'
        break
      default:
        status = 'OVERCAST'
    }
    let trackTitle = c[status].audio.slice(0, -4);
    this.setState({
      icon: `images/icons/${c[status].icon}`,
      sound: `sounds/${c[status].audio}`,
      soundName: trackTitle.replace(/[_]/g, ' '),
      nowPlaying: c[status].title,
      assocSound: c[status].assoc,
      feelSound: c[status].feeling,
      instrSound: c[status].instr
    })
  }

  render() {
    const { weather } = this.props
    const {
      sound, playing, icon, clicked, assocSound, feelSound, instrSound, nowPlaying, soundName
    } = this.state
    if (weather) {
      return (
        <div className='info-everything'>
          <Sound url={sound}
            playStatus={playing}
            loop={true}
          />
          <img className='logo' src='./images/babyangel.png' />
          <div className='info-container'>
            <div className='info-content'>
              <div className='temperature-container'>
                <div className='title-table'>
                  <div className='title'>
                    Today's Weather
                  </div>
                </div>
                <div className='horizontal-line' />
                <div className='temperature'>
                  <div className='current-temp' >
                    {`${weather.temperature}°C`}
                  </div>
                  <div className='vertical-line' />
                  <div className='feels-like-container' >
                    <div className='feels-like-text'> feels like: </div>
                    <div className='feels-like'>
                      {`${weather.feelslike}°C`}
                    </div>
                  </div>
                </div>
                <div className='icon-container'>
                  <img className='icon' src={icon} />
                  <div className='humidity-text'>humidity:
                      <div className='humidity'>{`${weather.humidity}%`}</div>
                  </div>
                  <div className={`play-circle-${clicked}`} onClick={this.playSound}><div className='play' /></div>
                </div>
                <div className='sound-info-container'>
                  <div className='now-playing'>
                    <b className='info-bold'>NOW PLAYING: {nowPlaying} </b><br />
                    <b className='info-bold'>TRACK TITLE: </b>
                  </div>
                  <div className='track-text'> {soundName}</div>
                  <div className='sound-inspo-container'>
                    <div className='sound-info-line'>
                      <b className='inspo-bold'>ASSOCIATIVE SOUND:</b> <div className='inspo'>{assocSound}</div>
                    </div>
                    <div className='sound-info-line'>
                      <b className='inspo-bold'>FEELING SOUND:</b> <div className='inspo'>{feelSound}</div>
                    </div>
                    <div className='sound-info-line'>
                      <b className='inspo-bold'>INSTRUMENT SOUND:</b> <div className='inspo'>{instrSound}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    iconSound: state.iconSound
  }
}

export default connect(mapStateToProps)(Info)