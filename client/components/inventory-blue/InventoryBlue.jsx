import React from 'react'
import ProjectHeader from '../ProjectHeader'

class InventoryBlue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <div className="paper-bg project-group">
        <ProjectHeader 
            title="Activities/Inventory for Feeling Blue"
            date="2020" 
            location="Blue Oyster Postal Project 2020" 
            locationUrl=""
        ></ProjectHeader>
    
        {/* description */}
        {/* images */}
        {/* download */}
      </div>
    )
  }
}

export default InventoryBlue