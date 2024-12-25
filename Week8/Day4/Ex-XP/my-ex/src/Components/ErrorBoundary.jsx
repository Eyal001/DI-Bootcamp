import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>An error has occured.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
