const Form = ({ formData, setFormData }) => {
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
    <form>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div>
        <label>Gender:</label>
        <label>
          Male
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={(e) => handleInput(e)}
          />
        </label>
        <label>
          Female
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={(e) => handleInput(e)}
          />
        </label>
      </div>
      <div>
        <label>Destination:</label>
        <select
          name="destination"
          value={formData.destination}
          onChange={(e) => handleInput(e)}
        >
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
              checked={formData.dietaryRestrictions.nutsFree}
              onChange={(e) => handleInput(e)}
            />
          </label>
          <label>
            Lactose Free
            <input
              type="checkbox"
              name="lactoseFree"
              checked={formData.dietaryRestrictions.lactoseFree}
              onChange={(e) => handleInput(e)}
            />
          </label>
          <label>
            Vegan
            <input
              type="checkbox"
              name="vegan"
              checked={formData.dietaryRestrictions.vegan}
              onChange={(e) => handleInput(e)}
            />
          </label>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
