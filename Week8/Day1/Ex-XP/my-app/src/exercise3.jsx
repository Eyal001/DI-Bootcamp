import { Component } from "react";
import "./Exercise.css";

class Exercise extends Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <>
        <h1 style={style_header}>This is a Header</h1>
        <p className="para">This is a paragraph</p>
        <a href="https://www.example.com">This is a link</a>
        <br />
        <label>This is a Form:</label>

        <form action="">
          <input type="text" name="" id="" />
          <button>sumbit</button>
        </form>
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1603797780927/S6loCK6fY.png"
          alt="react-image"
        />
        <p className="para">This is a list:</p>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </>
    );
  }
}
export default Exercise;
