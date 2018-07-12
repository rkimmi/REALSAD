import React from 'react'

import {connect} from 'react-redux'

import Sound from 'react-sound'


class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = { playing: Sound.status.PLAYING, clicked: false }
        this.getIconPlusSound = this.getIconPlusSound.bind(this)
        this.playSound = this.playSound.bind(this)
    }

    componentDidMount() {
        this.props.getWeather &&
        this.getIconPlusSound()
    }

    playSound() {
        this.setState({playing: Sound.status.PLAYING, clicked: true})
    }

    getIconPlusSound() {
        const weather = this.props.getWeather.condition.text.toLowerCase()
        const weatherText = weather.split(' ')
        console.log(weatherText.indexOf('thunder'))
        let icon = ''
        let sound = ''
        let nowPlaying = ''
        let associativeSound = ''
        let feelingSound = ''
        let instrumentSound = ''
        
        if (weatherText.indexOf('shower') >= 0) {
            icon = '/images/icons/raining.png'
            sound = '/sounds/Orgasmic_Biofeedback_Aura.wav'
            nowPlaying = 'RAINY'
            associativeSound = 'Crowd Applause (slowed to sound wet)'
            feelingSound = 'Whales/Sticky mud'
            instrumentSound = 'Bass Guitar'
        } 
        else if (weatherText.indexOf('rain') >= 0) {
            icon = '/images/icons/raining.png'
            sound = '/sounds/Orgasmic_Biofeedback_Aura.wav'
            nowPlaying = 'RAINY'
            associativeSound = 'Crowd Applause (slowed to sound wet)'
            feelingSound = 'Whales/Sticky mud'
            instrumentSound = 'Bass Guitar'
        } 
        else if (weatherText.indexOf('storm') >= 0) {
            icon = '/images/icons/heavyrain.png'
            sound = '/sounds/Orgasmic_Biofeedback_Aura.wav'
            nowPlaying = 'STORM'
            associativeSound = 'Crowd Applause (slowed to sound wet)'
            feelingSound = 'Whales/Sticky mud'
            instrumentSound = 'Bass Guitar'
        } 
        else if (weatherText.indexOf('thunder') >= 0) {
            icon = '/images/icons/heavyrain.png'
            sound = '/sounds/Orgasmic_Biofeedback_Aura.wav'
            nowPlaying = 'STORM'
            associativeSound = 'Crowd Applause (slowed to sound wet)'
            feelingSound = 'Whales/Sticky mud'
            instrumentSound = 'Bass Guitar'
        } 
        else if (weatherText.indexOf('snow') >= 0) {
            icon = '/images/icons/heavyrain.png'
            sound = '/sounds/Orgasmic_Biofeedback_Aura.wav'
            nowPlaying = 'SNOW'
            associativeSound = 'Crowd Applause (slowed to sound wet)'
            feelingSound = 'Whales/Sticky mud'
            instrumentSound = 'Bass Guitar'
        } 
        else if (weatherText.indexOf('thunder') >= 0) {
            icon = '/images/icons/heavyrain.png'
            sound = '/sounds/Orgasmic_Biofeedback_Aura.wav'
            nowPlaying = 'RAINY'
            associativeSound = 'Crowd Applause (slowed to sound wet)'
            feelingSound = 'Whales/Sticky mud'
            instrumentSound = 'Bass Guitar'
        }
        else if (weatherText.indexOf('cast') >= 0) {
            icon = './images/icons/overcast.png'
            sound = '/sounds/Purple_Centering_Prayer.wav'
            associativeSound = 'Wind through creaking trees'
            feelingSound = 'Dry branches breaking as you walk on them'
            instrumentSound = 'Cello'
            nowPlaying = 'OVERCAST'
        }
         else if (weatherText.indexOf('cloud') >= 0) {
            icon = '/images/icons/cloudy.png'
            sound = '/sounds/Buddhist_Mindscape_Hand.wav'
            nowPlaying ='CLOUDY'
            associativeSound = 'Flags in Wind'
            feelingSound = 'Bat Wings Flapping'
            instrumentSound = 'Moog Modular Synth'
         }
         else if (weatherText.indexOf('sun') >= 0) {
            icon = '/images/icons/sunny.png'
            sound = '/sounds/Chakratic_Appearance_Crystal.wav'
            nowPlaying = 'SUNNY'
            associativeSound = 'Birds Songs/Chirping'
            feelingSound = 'Campfires'
            instrumentSound = 'C80 Soft Analog Synth (Pad)'
         }
        else if (weatherText.indexOf('clear') >= 0) {
            icon = '/images/icons/sunny.png'
            sound = '/sounds/Chakratic_Appearance_Crystal.wav'
            nowPlaying = 'SUNNY'
            associativeSound = 'Birds Songs/Chirping'
            feelingSound = 'Campfires'
            instrumentSound = 'C80 Soft Analog Synth (Pad)'
        } else {
            icon = '/images/icons/overcast.png'
            sound = '/sounds/Purple_Centering_Prayer.wav'
            nowPlaying = 'OVERCAST'
            associativeSound = 'Wind through creaking tress'
            feelingSound = 'Dry branches breaking as you walk on them'
            instrumentSound = 'Cello'
        }

        const soundName = sound.substr(8)
        const trackTitle = soundName.slice(0, -4);
        const fullTitle = trackTitle.replace(/[_]/g,' ')

        this.setState({
            icon: icon,
            sound: sound,
            soundName: fullTitle,
            nowPlaying: nowPlaying,
            associativeSound: associativeSound,
            feelingSound: feelingSound,
            instrumentSound: instrumentSound
        })
    }

    render() {
        if (this.props.getWeather) {
            return (
                <div className='info-everything'>
                <Sound url={this.state.sound} 
                playStatus={this.state.playing}
                loop={true}
                />
                    <img className={`logo`} src='./images/babyangel.png' />
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
                                    <div className={`play-circle-${this.state.clicked}`} onClick={this.playSound}><div className='play'/></div>
                                </div>
                                <div className='sound-info-container'>
                                    <div className='now-playing'>
                                        <b className='info-bold'>NOW PLAYING: {this.state.nowPlaying} </b><br />
                                        <b className='info-bold'>TRACK TITLE: </b>
                                       
                                    </div>
                                    <div className='track-text'> {this.state.soundName}</div>
                                    <div className='sound-inspo-container'>
                                    <div className='sound-info-line'>
                                    <b className='inspo-bold'>ASSOCIATIVE SOUND:</b> <div className='inspo'>{this.state.associativeSound}</div>
                                    </div>
                                    <div className='sound-info-line'>
                                    <b className='inspo-bold'>FEELING SOUND:</b> <div className='inspo'>{this.state.feelingSound}</div>
                                    </div>
                                    <div className='sound-info-line'>
                                    <b className='inspo-bold'>INSTRUMENT SOUND:</b> <div className='inspo'>{this.state.instrumentSound}</div>
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
        getWeather: state.getWeather,
        iconSound: state.iconSound
    }
}

export default connect(mapStateToProps)(Info)