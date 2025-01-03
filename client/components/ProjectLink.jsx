import React from "react";
import { Link } from "react-router-dom"

class ProjectLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { date, title, location, url} = this.props
    return (
        <div className="project-group">
            <span className="project-date">
                <i>{date}</i> .
            </span>
            <Link to={url}>
                <a className="project-title">
                <span><i>{title}</i></span>
                <span>{location}</span>
                </a>
            </Link> 
        </div>
    )
  }
}

  
export default ProjectLink