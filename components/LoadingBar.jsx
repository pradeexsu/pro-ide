class LoadingBar extends React.Component {
    render() {
      return (
        <div class="dots" hidden={this.props.hidden}>
          <div class="dot1"></div>
          <div class="dot2"></div>
          <div class="dot3"></div>
        </div>
      );
    }
  }

  export default LoadingBar;