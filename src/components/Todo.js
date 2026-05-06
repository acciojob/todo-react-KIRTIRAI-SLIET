import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    setList((p) => p.push(text));
    setText("");
  };

  const deleteItem = (i) => {
    const newArr = arr.filter((item) => item !== i);
    setList(newArr);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" value={text} />
      <button onClick={addItem}>
        Add Todo
      </button>
      <ul>
        {list.map((itm, id) => (
          <li key={id}>
            <div>
              {itm}
              <button onClick={deleteItem(itm)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
