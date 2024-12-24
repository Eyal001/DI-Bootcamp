import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    dietaryRestrictions: {
      nutsFree: false,
      lactoseFree: false,
      vegan: false,
    },
  });

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => {
      if (type === "checkbox") {
        return {
          ...prevState,
          dietaryRestrictions: {
            ...prevState.dietaryRestrictions,
            [name]: checked,
          },
        };
      }
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className="form">
      <h1>Sample Form</h1>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" onChange={(e) => handleInput(e)} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" onChange={(e) => handleInput(e)} />
        </div>
        <div>
          <label>Gender:</label>
          <label>
            Male
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => handleInput(e)}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => handleInput(e)}
            />
          </label>
        </div>
        <div>
          <label>Destination:</label>
          <select name="destination" onChange={(e) => handleInput(e)}>
            <option value="">Select a destination</option>
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
          </select>
        </div>
        <div>
          <label>Dietary Restrictions:</label>
          <div>
            <label>
              Nuts Free
              <input
                type="checkbox"
                name="nutsFree"
                onChange={(e) => handleInput(e)}
              />
            </label>
            <label>
              Lactose Free
              <input
                type="checkbox"
                name="lactoseFree"
                onChange={(e) => handleInput(e)}
              />
            </label>
            <label>
              Vegan
              <input
                type="checkbox"
                name="vegan"
                onChange={(e) => handleInput(e)}
              />
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Entered information:</h2>
        <p>
          Your name: {formData.firstName} {formData.lastName}
        </p>
        <p>Your age: {formData.age}</p>
        <p>Your gender: {formData.gender}</p>
        <p>Your destination: {formData.destination}</p>
        <p>Your dietary restrictions: </p>
        <div className="restrictions">
          <span>
            Nuts free: {formData.dietaryRestrictions.nutsFree ? "Yes" : "No"}
          </span>
          <br />
          <span>
            Lactose free:{" "}
            {formData.dietaryRestrictions.lactoseFree ? "Yes" : "No"}
          </span>
          <br />
          <span>
            Vegan meal: {formData.dietaryRestrictions.vegan ? "Yes" : "No"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
