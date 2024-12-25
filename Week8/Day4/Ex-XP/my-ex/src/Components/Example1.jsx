import { Component } from "react";
import data from "../data.json";

class Example1 extends Component {
  render() {
    const socialMedias = data.SocialMedias;
    return (
      <ul>
        {socialMedias.map((link, index) => {
          return (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Example1;
