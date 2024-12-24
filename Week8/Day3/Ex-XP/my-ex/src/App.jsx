import { Component } from "react";
import "./App.css";
import BuggyCounter from "./Components/BuggyCounter";
import Color from "./Components/Color";
import ErrorBoundary from "./Components/ErrorBoundary";

class Child extends Component {
  componentWillUnmount() {
    alert("Child component unmounted!");
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  handleDelete = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <>
        <h1>React Error Boundary Simulation</h1>
        <hr />
        <p>
          These two counters are inside the same error boundary. If one crashes,
          the error boundary will replace both of them.
        </p>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <p>
          These two counters are each inside of their own error boundary. So if
          one crashes, the other is not affected.
        </p>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <p>
          This counter is not inside of boundary. So if crashes, all other
          components are deleted.
        </p>
        <BuggyCounter />

        <Color />

        {this.state.show && <Child />}

        <button onClick={this.handleDelete}>Delete Header</button>
      </>
    );
  }
}

export default App;
