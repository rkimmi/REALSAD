import React from 'react'
import ProjectHeader from '../ProjectHeader'

class InventoryBlue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='project-container'>
        <div className="paper-bg project-group">

        <ProjectHeader 
            title="Activities/Inventory for Feeling Blue"
            date="2020" 
            location="Blue Oyster Postal Project 2020" 
            locationUrl=""
        ></ProjectHeader>

            <div className="project-details flex-column">
                    <div className='project-details-inner'>
                    <div style={{marginTop: '60px'}}/>
                    <p className="project-description">
                    <br/><br/>
                      INVENTORY/ACTIVIITIES FOR FEELING BLUE, distributed to subscribers via post as part of Blue Oyster's POST — Postal Project, 2020.
                    <br/>
                    </p>
                    <br/>
                    <div className="project-images">
                        <img className="project-image" src="/images/inventoryblue/inventory-front.jpg"></img>
                        <img className="project-image" src="/images/inventoryblue/inventory-back-2.jpg"></img>
                    </div>
                    <p>
                        <br/>
                        <br/>
                    <br/>
                    <br/>
                    </p>
                    <br/>

                    </div>
                </div>
      </div>
      </div>
    )
  }
}

export default InventoryBlue