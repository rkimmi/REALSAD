import React from 'react'
import request from 'superagent'

import {connect} from 'react-redux'
const apiKey = process.env.WEATHER_API_KEY

import { getWeather } from '../actions/getWeather'

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.getWeather = this.getWeather.bind(this)
    }
    componentWillMount() {
        if (!this.props.getWeather) {
            this.getWeather()
        }
    }

    getWeather() {
        request
            .get(`https://api.apixu.com/v1/current.json?key=${apiKey}`)
            .set('Accept', 'application/json')
            .then(res => 
                
                this.props.dispatch(getWeather(res.body))
            )
    }

    render() {
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


export default connect(mapStateToProps)(Weather)