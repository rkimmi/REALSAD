import React from 'react'
import { connect } from 'react-redux'

class waitIndicator extends React.Component {
    constructor(props) {
        super(props)
        this.state = { }
    }

    
    render() {
        return (
            <div className='waiting-container' >
            <img className='waiting-spinning' src='images/whitebluebaby.png'/>
            </div>
        )
    }
}

  
export default waitIndicator

