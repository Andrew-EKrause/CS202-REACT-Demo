// Import state dependency and the other components.
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

// NOTE: JSX is a REACT extension to the JavaScript language
//       syntax. It provides a way to structure component
//       rendering using syntax familiar to many developers. 
//       It is similar in appearance to HTML. Think of it as
//       mixing JavaScript and HTML together.

// The App component, in this example, serves
// as the main component that contains other
// components (imported above). In this case,
// the App component provides the primary
// functionalities for the site.
function App() {
  // Use array structure to store state of webpage.
  const [items, setItems] = useState([]);

  // Include a function for adding more items to to-do list.
  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  // Include a function for removing items from to-do list.
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  // Return the main to-do list 
  // section with the heading, 
  // input area component, and
  // any item components that 
  // may have been added.
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

// Export the App component so it can
// be used by the index.js file.
export default App;
