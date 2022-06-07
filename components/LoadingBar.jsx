import React from "react";
class LoadingBar extends React.Component {
    render() {
      return (
        <div className="dots" hidden={this.props.hidden}>
          <div className="dot1"></div>
          <div className="dot2"></div>
          <div className="dot3"></div>
        </div>
      );
    }
  }

  export default LoadingBar;