import React from 'react'

import allQuotes from './allQuotes.json'
import allImages from './allImages.json'
import _ from 'lodash'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postcardShowing: true,
            image: '',
            quote: '',
        }
        this.toggleCard = this.toggleCard.bind(this)
        this.getQuote = this.getQuote.bind(this)
        this.getImage = this.getImage.bind(this)
        this.getAll = this.getAll.bind(this)
    }

    componentWillMount() {
        this.getQuote()
        this.getImage()
    }

    toggleCard () {
        this.state.postcardShowing ? 
        this.setState({
            postcardShowing: false
        }) :
        this.setState({
            postcardShowing: true
        }) 
    }

    getAll() {
        this.getQuote()
        this.getImage()
    }

    getImage() {
        const randomImage = _.sample(allImages.images)
        this.setState({ image: randomImage })
    }

    getQuote() {
        const randomQuote = _.sample(allQuotes.quotes)
        this.setState({ quote: randomQuote.text })
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
                    <div className='postcard-text' />
                </div>
            </div>

        )

    }
}

export default Card
