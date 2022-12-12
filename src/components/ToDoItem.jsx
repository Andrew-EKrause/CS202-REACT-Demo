// Import dependency for react.
import React from "react";

// Function adds structure for any
// to-do items that are added to 
// the list. The function also adds
// behavior for when any given item
// is clicked.
function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

// Export component for use in the project.
export default ToDoItem;
