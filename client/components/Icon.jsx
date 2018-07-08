import React from 'react'

import {connect} from 'react-redux'

// import { getIcon } from '../actions/getIcon'

class Icon extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            icon: ''
        }
        this.getIcon = this.getIcon.bind(this)
    }

    componentDidMount() {
        this.props.getWeather &&
        this.getIcon()
    }

    getIcon() {
        let icon = ''
        const weatherText = this.props.getWeather.condition.text.toLowerCase()
        if (weatherText.indexOf('rain') >= 0) {
            icon = './images/icons/raining.png'
        } else if (weatherText.indexOf('showers') >= 0) {
            icon = './images/icons/raining.png'
        } else if (weatherText.indexOf('storm') >= 0) {
            icon = './images/icons/heavyrain.png'
        } else if (weatherText.indexOf('thunder') >= 0) {
            icon = './images/icons/heavyrain.png'
        } else if (weatherText.indexOf('cast') >= 0) {
            icon = './images/icons/overcast.png'
        } else if (weatherText.indexOf('cloud') >= 0) {
            icon = './images/icons/overcast.png'
        } else if (weatherText.indexOf('sun') >= 0) {
            icon = './images/icons/sunny.png'
        } else {
            icon = './images/icons/overcast.png'
        }
        this.setState({ icon: icon })
        // this.props.dispatch(getIcon())
    }

    render () {
        return (
            <img className='icon' src={this.state.icon} />
        )
    }

}


const mapStateToProps = (state) => {
    return {
        getWeather: state.getWeather
    }
}

export default connect(mapStateToProps)(Icon)