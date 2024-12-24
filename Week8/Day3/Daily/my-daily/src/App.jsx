import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";

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

  return (
    <div className="form">
      <h1>Sample Form</h1>
      <Form formData={formData} setFormData={setFormData} />
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
            Lactose free:
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
