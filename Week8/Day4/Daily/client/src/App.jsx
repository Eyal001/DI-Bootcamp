import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    message: "",
    inputValue: "",
    responseMessage: "",
  };
  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:5000/api/hello");
      const data = await response.json();
      this.setState({ message: data.message });
    } catch (error) {
      console.log(error);
    }
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/world", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inputValue: this.state.inputValue }),
      });
      const data = await res.json();
      this.setState({ responseMessage: data.message });
    } catch (error) {
      console.log(error);
    }
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <br />
        <h1>Post to server:</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            placeholder="Type something..."
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.responseMessage && <p>{this.state.responseMessage}</p>}
      </div>
    );
  }
}

export default App;
