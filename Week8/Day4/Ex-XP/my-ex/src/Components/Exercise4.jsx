import { Component } from "react";

class Exercise4 extends Component {
  postData = async () => {
    const jsonData = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    };

    try {
      const response = await fetch(
        "https://webhook.site/6634926b-0645-4c98-997c-b578b84c26ea",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        }
      );

      console.log("Webhook response:", response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.postData}>Press me to post some data</button>
      </div>
    );
  }
}

export default Exercise4;
