import { Component } from "react";
import data from "../data.json";

class Example2 extends Component {
  render() {
    const skills = data.Skills;
    console.log(skills);
    return (
      <div>
        {skills.map((skills, index) => {
          return (
            <div key={index}>
              <h2> {skills.Area}</h2>
              <ul>
                {skills.SkillSet.map((skill, index) => {
                  return <li key={index}>{skill.Name}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Example2;
