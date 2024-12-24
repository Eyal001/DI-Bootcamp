import { Component } from "react";

class BuggyCounter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState((state) => {
      if (state.counter === 4) {
        throw new Error("I crashed!");
      }
      return { counter: state.counter + 1 };
    });
  };
  render() {
    return (
      <div>
        <h2>Buggy Counter: {this.state.counter}</h2>
        <button onClick={this.handleClick}>{this.state.counter}</button>
      </div>
    );
  }
}

export default BuggyCounter;
