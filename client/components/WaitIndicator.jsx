import React from 'react'

class WaitIndicator extends React.Component {
    constructor(props) {
        super(props)
        this.state = { }
    }

    
    render() {
        return (
            <div className='waiting-container' >
            <img className='waiting-spinning' src='images/babyangel.png'/>
            </div>
        )
    }
}

  
export default WaitIndicator

