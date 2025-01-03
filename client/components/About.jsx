import React from 'react'
import { connect } from 'react-redux'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='about-container'>
        Wellbeing Analysis Techniques Limited™, co-directed by Kimmi Rindel and Van Mei, is a
        organisation and arts collective that examines the industry of wellness through arts practice,
        satire and genuine belief in alternative therapies.
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)