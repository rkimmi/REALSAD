import React from 'react'

import allQuotes from './allQuotes.json'
import allImages from './allImages.json'
import _ from 'lodash'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: '',
            quote: ''
        }
        this.getQuote = this.getQuote.bind(this)
        this.getImage = this.getImage.bind(this)
        this.getAll = this.getAll.bind(this)
    }

    componentWillMount() {
        this.getQuote()
        this.getImage()
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
        return (
            <div>
            <div className='card-container'  onClick={this.getAll}>
                <img className='card' src={this.state.image} alt=''/>
                <div className='quote-container' >
                    <h1 className='quote'>
                        {this.state.quote}
                    </h1>
                    
                </div>
            </div>
            </div>
        )
    }

}

export default Card
