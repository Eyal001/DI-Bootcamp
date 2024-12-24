import { Component } from "react";

class Color extends Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: "red",
    };
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 2000);
  }
  getSnapshotBeforeUpdate() {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("after update");
  }
  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <>
        <h1>My favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change to blue</button>
      </>
    );
  }
}

export default Color;
