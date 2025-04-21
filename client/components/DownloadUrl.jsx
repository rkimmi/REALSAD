import React from "react";

class DownloadUrl extends React.Component {
  render() {
    const { url, title } = this.props
    return (
        <div className="flex-row url-w-icon">
            <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#5252f8" strokeLinecap="round" 
                strokeLinejoin="round" 
                width="22" 
                height="22" 
                strokeWidth="2"> 
                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path> 
                <path d="M11 13l9 -9"></path> 
                <path d="M15 4h5v5"></path> 
            </svg> 
            <a className="underline" 
                style={{marginLeft: '5px', marginRight: '5px'}}
                href={url}>
                {title}
            </a>
      </div>
    )
  }
}

  
export default DownloadUrl