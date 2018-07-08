import React from 'react'

import {connect} from 'react-redux'

import Icon from './Icon'

class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            infoShowing: true
        }

    }

    render() {
        if (this.state.infoShowing && this.props.getWeather) {
            return (
                <div className='info-everything'>
                    <img className={`logo-${this.state.infoShowing}`} src='./images/whitebluebaby.png' />
                    <div className='info-container'>
                        <div className='info-content'>
                            <div className='temperature-container'>
                                <div className='title-table'>
                                    <div className='title'>
                                        Todays Weather
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
                                <Icon />
                                <div className='humidity-text'>humidity:
                                <div className='humidity'>{`${this.props.getWeather.humidity}%`}</div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='info-showing-tab' >
                            <div className={`info-showing-button${this.state.infoShowing}`} />
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
        getWeather: state.getWeather
    }
}

export default connect(mapStateToProps)(Info)