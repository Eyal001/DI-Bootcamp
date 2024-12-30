import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../Redux/actions";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text) {
      addTodo(text);
      setText("");
    }
  };
  return (
    <div>
      <input
        value={text}
        placeholder="Enter a new todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add new Todo</button>
    </div>
  );
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(AddTodo);
