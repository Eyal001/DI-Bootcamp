import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch = (error, errorInfo) => {
    console.log("Caught an error: ", error);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  };
  render() {
    if (this.state.errorInfo) {
      return (
        <details style={{ whiteSpace: "pre-wrap" }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
