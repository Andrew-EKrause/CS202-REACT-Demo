// Import current state as a dependency from react.
import React, { useState } from "react";

function InputArea(props) {
  // Use array structure to store state of input field.
  const [inputText, setInputText] = useState("");

  // Function called in HTML below for getting value 
  // of text field when there is a change (for example,
  // the user enters info into the field).
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  // Return the actual HTML/JavaScript code (JSX)
  // that is included in the InputArea component.
  // This component builds out the form and Add
  // button that allows the user to enter a new
  // item to the list.
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

// Export component for use in the project.
export default InputArea;
