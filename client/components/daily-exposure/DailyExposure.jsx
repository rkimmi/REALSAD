import React from 'react'
import ProjectHeader from '../ProjectHeader'

class DailyExposure extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <div className="paper-bg project-group">
        <ProjectHeader 
            title="Daily Exposure" 
            date="2018" 
            location="Window" 
            locationUrl=""/>

        {/* description */}
        {/* images */}
        {/* download */}
      </div>
    )
  }
}

export default DailyExposure