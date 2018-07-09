import React from 'react'

import {connect} from 'react-redux'

import Sound from 'react-sound'


class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = { }
        this.getIconPlusSound = this.getIconPlusSound.bind(this)
    }

    componentDidMount() {
        this.props.getWeather &&
        this.getIconPlusSound()
    }

    getIconPlusSound() {
        const weather = this.props.getWeather.condition.text.toLowerCase()
        const weatherText = weather.split(' ')
        console.log(weatherText.indexOf('thunder'))
        let icon = ''
        let sound = ''
        let nowPlaying = ''
        
        // switch(weatherText) {
        //     case indexOf('snow'):
        //     console.log('snow')
        //     icon = '/images/icons/heavyrain.png'
        //     sound = '/sounds/Orgasmic_Biofeedback_Aura.wav'
        //     nowPlaying = 'SNOW'
        // }
        if (weatherText.indexOf('shower') >= 0) {
            icon = '/images/icons/raining.png'
            sound = '/sounds/Orgasmic_Biofeedback_Aura.wav'
            nowPlaying = 'RAINY'
        } 
        else if (weatherText.indexOf('rain') >= 0) {
            icon = '/images/icons/raining.png'
            sound = '/sounds/Orgasmic_Biofeedback_Aura.wav'
            nowPlaying = 'RAINY'
        } 
        else if (weatherText.indexOf('storm') >= 0) {
            icon = '/images/icons/heavyrain.png'
            sound = '/sounds/Orgasmic_Biofeedback_Aura.wav'
            nowPlaying = 'STORM'
        } 
        else if (weatherText.indexOf('thunder') >= 0) {
            console.log('rain')
            icon = '/images/icons/heavyrain.png'
            sound = '/sounds/Orgasmic_Biofeedback_Aura.wav'
            nowPlaying = 'STORM'
        } 
        else if (weatherText.indexOf('snow') >= 0) {
            console.log('rain')
            icon = '/images/icons/heavyrain.png'
            sound = '/sounds/Orgasmic_Biofeedback_Aura.wav'
            nowPlaying = 'SNOW'
        } 
        else if (weatherText.indexOf('thunder') >= 0) {
            icon = '/images/icons/heavyrain.png'
            sound = '/sounds/Orgasmic_Biofeedback_Aura.wav'
            nowPlaying = 'RAINY'
        }
        else if (weatherText.indexOf('cast') >= 0) {
            icon = './images/icons/overcast.png'
            sound = '/sounds/Purple_Centering_Prayer.wav'
            nowPlaying = 'OVERCAST'
        }
         else if (weatherText.indexOf('cloud') >= 0) {
            icon = '/images/icons/cloudy.png'
            sound = '/sounds/Buddhist_Mindscape_Hand.wav'
            nowPlaying = 'CLOUDY'
         }
         else if (weatherText.indexOf('sun') >= 0) {
            icon = '/images/icons/sunny.png'
            sound = '/sounds/Chakratic_Appearance_Crystal.wav'
            nowPlaying = 'SUNNY'
        } else {
            icon = '/images/icons/overcast.png'
            sound = '/sounds/Purple_Centering_Prayer.wav'
            nowPlaying = 'OVERCAST'
        }

        const soundName = sound.substr(8)
        const trackTitle = soundName.slice(0, -4);
        const fullTitle = trackTitle.replace(/[_]/g,' ')


        this.setState({
            icon: icon,
            sound: sound,
            soundName: fullTitle,
            nowPlaying: nowPlaying
        })
    }

    render() {
        if (this.props.getWeather) {
            return (
                <div className='info-everything'>
                <Sound url={this.state.sound} 
                playStatus={Sound.status.PLAYING}
                loop={true}
                />
                    <img className={`logo`} src='./images/whitebluebaby.png' />
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
                                        {`${this.props.getWeather.temp_c}°C`}
                                    </div>
                                    <div className='vertical-line' />
                                    <div className='feels-like-container' >
                                        <div className='feels-like-text'> feels like: </div>
                                        <div className='feels-like'>
                                            {`${this.props.getWeather.feelslike_c}°C`}
                                        </div>
                                    </div>
                                </div>
                                <div className='icon-container'>
                                <img className='icon' src={this.state.icon} />
                                <div className='humidity-text'>humidity:
                                <div className='humidity'>{`${this.props.getWeather.humidity}%`}</div>
                                    </div>
                                </div>
                                <div className='sound-info-container'>
                                    <div className='now-playing'>
                                        <b className='info-bold'>NOW PLAYING: {this.state.nowPlaying} </b><br />
                                        <b className='info-bold'>TRACK TITLE: </b>
                                       
                                    </div>
                                    <div className='track-text'> {this.state.soundName}</div>
                                    
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
        getWeather: state.getWeather,
        iconSound: state.iconSound
    }
}

export default connect(mapStateToProps)(Info)