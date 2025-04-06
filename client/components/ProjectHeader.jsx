import React from "react";

class ProjectHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { date, title, location, locationUrl } = this.props
    return (
        <div className="flex-column project-header">
        <h2 style={{width: '100px'}}>
          {title}
        </h2>
        <div className="flex-row">
          <p className="project-date">
          <i>{date}</i>&nbsp;&nbsp;.
          </p>
          <a className="underline nowrap" href={locationUrl}>
          <p className="">
            {location}
          </p>
            </a>
          </div>
      </div>
    )
  }
}

  
export default ProjectHeader