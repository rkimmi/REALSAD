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
            condition: ''
        }
        this.toggleCard = this.toggleCard.bind(this)
        this.getQuote = this.getQuote.bind(this)
        this.getImage = this.getImage.bind(this)
        this.getWeatherInfo = this.getWeatherInfo.bind(this)
    }

    componentWillMount() {
        this.getQuote()
        this.getImage()
        this.getWeatherInfo()
    }

    toggleCard() {
        this.state.postcardShowing ?
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

    getWeatherInfo() {
        if (this.props.getWeather) {
            const condition = this.props.getWeather.condition.text
            const newCondition = _.lowerCase(condition)

            const degrees = this.props.getWeather.temp_c
            let clothing = 4
            if (degrees >= 4 && degrees <= 9) {
                clothing = 4
            }
            if (degrees >= 9 && degrees <= 14) {
                clothing = 3
            }
            if (degrees >= 14 && degrees <= 19) {
                clothing = 2
            }
            if (degrees >= 19 && degrees <= 23) {
                clothing = 1
            }

            this.setState({ condition: newCondition, clothing: clothing })

        }

    }

    render() {
        if (!this.state.postcardShowing) {
            const style = { backgroundImage: `url(${this.state.image})` }
            return (
                <div className='card-container' onClick={this.toggleCard}>
                    <div className='card' style={style} alt='' />
                    <div className='quote-container' >
                        <h1 className='quote'>
                            {this.state.quote}
                        </h1>
                    </div>
                </div>
            )
        } 
        return (
            
            <div className='card-container' onClick={this.toggleCard} >
                <div className='postcard' >
                <div className='p-left-container'>
                <p className='note-timestamp'> <b className='p-small'>{this.props.getWeather.last_updated}</b> </p>
                    <div className='text-box'>
                        <p className='p-text'>
                           Dear Angel, <br /><br />

                            At <b className='p-bold'>WELLBEING ANALYSIS TECHNIQUES LIMITED </b>, we recognise the positive and negative effects that climate has on our health. <br /> <br />

                            The condition is {this.state.condition} in <b className='p-bold'>AUCKLAND CITY</b> today, and currently {this.props.getWeather.temp_c} degrees Celsius.
                             <b className='p-bold'> WELLBEING ANALYSIS TECHNIQUES LIMITED</b> recommends wearing at least {this.state.clothing} layers of clothing. <br /> <br />

                            And remember, <br />
                            <p className='dyk-quote'><i>{this.state.quote}</i></p>
                            <br />xoxo 
                           
                            {/* <b className='p-bold'>WELLBEING ANALYSIS TECHNIQUES LIMITED</b> */}
                        </p>
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
        getWeather: state.getWeather
    }
}


export default connect(mapStateToProps)(Card)
