import { Component } from "react";
import data from "../data.json";

class Example3 extends Component {
  render() {
    const experiences = data.Experiences;
    return (
      <div>
        <h3>Experience:</h3>
        {experiences.map((experience, index) => (
          <div key={index}>
            <img
              src={experience.logo}
              alt={experience.companyName}
              width="200"
            />
            <p>
              <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.companyName}
              </a>
            </p>
            {experience.roles.map((role, roleIndex) => (
              <div key={roleIndex}>
                <p>
                  <strong>{role.title}</strong>
                </p>
                <p>
                  {role.startDate} {role.location}
                </p>
                <p>{role.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
