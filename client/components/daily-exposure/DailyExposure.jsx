import React from 'react'
import ProjectHeader from '../ProjectHeader'
import DownloadUrl from '../DownloadUrl'

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
            locationUrl="https://windowgallery.co.nz/exhibitions/daily-exposure"/>
            <div className="project-details flex-column">
                    <div className='project-details-inner'>
                    <p className="project-description">
                    DAILY EXPOSURE — a Concept Clinic that delivered light therapy to those affected by Seasonal Affective Disorder [SAD] during mid-winter 2018 at the University of Auckland.
                    <br/><br/>
                    Using the latest in 
                    <a className="underline" style={{marginLeft: '5px', marginRight: '5px'}}
                        href="https://verilux.com/collections/happylight-therapy-lamps-boxes?srsltid=AfmBOopInSdE_HzKO3x1JhtUJpOtJUIgw79hE_EzlCtGfGHEmdU0BPwC">
                      Verilux™Happy Light
                    </a>
                    technology, the Daily Exposure clinic offered a meditative space for University patrons in lieu of budget cuts for the arts and healthcare.
                    </p>
                    <br/>
                    <div className="project-images">
                        <img className="project-image" src="/images/dailyexposure/daily-exposure2.jpg"></img>
                        <img className="project-image" src="/images/dailyexposure/daily-exposure1.jpg"></img>
                    </div>
                    <p>
                        The clinic was open for use from Mon – Wed, 12.30 – 3pm.
                        <br/>
                        <br/>
                    Hosted by Light Therapy Support Assistant, Mya Maree Cole.
                    <br/>
                    <br/>
                    With music by Jms Rsby.
                    </p>
                    <br/>
                    <div className="flex-row">
                    <DownloadUrl url="https://drive.google.com/file/d/1IiNa4woJjvxpPxnIP5__lpxKlHzx7kTY/view?usp=sharing" title="WATL survey"/>
                    <DownloadUrl url="https://docs.google.com/document/d/1MMAJj-fwEuaRi4kR4iRsGn95gh7jb8Mnh60nW1MuslE/edit?usp=sharing" title="Light Assistant Job Ad"/>
                    </div>
                    </div>
                </div>
      </div>
    )
  }
}

export default DailyExposure