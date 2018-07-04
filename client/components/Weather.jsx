import React from 'react'
import request from 'superagent'

import {connect} from 'react-redux'

import { getWeather } from '../actions/getWeather'

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.getWeather = this.getWeather.bind(this)
    }
    componentWillMount() {
        this.getWeather()
    }

    getWeather() {
        request
            .get('http://api.apixu.com/v1/current.json?key=c019052f11644461a6c21207183003&q=Auckland')
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