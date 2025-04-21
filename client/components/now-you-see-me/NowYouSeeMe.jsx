import React from 'react'
import ProjectHeader from '../ProjectHeader'

class NowYouSeeMe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <div className='project-container'>
            <div className='paper-bg'>
            <div className="project-group flex-wrap">
                <ProjectHeader 
                    title="Now You See Me"
                    date="2021" 
                    location="The Booth, Gus Fisher"
                    locationUrl="https://gusfishergallery.auckland.ac.nz/wellbeing-analysis-techniques-limited-now-you-see-me-2021/"
                ></ProjectHeader>
                <div className="project-details flex-column">
                    <div className='project-details-inner'>
                    <p className="project-description">
                        Featured alongside the exhbition "Happiness is only real when shared".
                        <br/>
                        <br/>
                        Now You See Me, a pop-up vanity room, delivers a digitally mediated space for self-reflection. A DIY two-way ‘smart’ mirror on the centre wall acts as both a screen and a mirror, projecting real-time updates of current events, world news, weather reports and traffic information. 
                        <br/>
                        <br/>
                    </p>
                    <div className="project-images">
                        <img className="project-image" src="/images/nowyouseeme/nysm3.jpg"></img>
                        <p className="project-description">     
                        <br/>
                        In speaking to science-fictive ideas of domestic space — a screen in every room, everyday objects made smart — Now You See Me promotes a semblance of helpfulness; of multitasking, of time-saving, while embodies the merging of rituals, of internalised and actualised surveillance. 
                        <br/>
                        <br/>
                    </p>
                        <img className="project-image" src="/images/nowyouseeme/mirror.jpg"></img>
                    </div>
    
                    </div>
                </div>
      </div>
      </div>
      </div>
    )
  }
}

export default NowYouSeeMe