import React from "react";
import { Link } from "react-router-dom" 

class ProjectHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { date, title, location, locationUrl } = this.props
    return (
        <div className="flex-column project-header">
         <Link className="back-btn nav-item" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="blue"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
          <path d="M9 14l-4 -4l4 -4" />
          <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
        </svg>
      </Link>  
        <h2 style={{width: '100px'}}>
          {title}
        </h2>
        <div className="flex-row">
          <p className="project-date">
          <i>{date}</i>&nbsp;&nbsp;.
          </p>
          {locationUrl.length ? (
            <a className="underline nowrap" href={locationUrl}>
            <p className="">
              {location}
            </p>
          </a> 
          ):
           <p className="">
            {location}
            </p>
          } 
          </div>

      </div>
    )
  }
}

  
export default ProjectHeader