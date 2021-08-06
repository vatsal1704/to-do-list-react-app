import React, { useState } from "react";

const Card = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [editItems, setEditItems] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  // Add item in the list
  const addItem = () => {
    if (!input) {
      alert("Please enter an item first !!");
    } else if (toggleButton && input) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === editItems) {
            return { ...curElem, name: input };
          } else {
            return curElem;
          }
        })
      );
      setInput([]);
      setEditItems(null);
      setToggleButton(false);
    } else {
      const newInputData = {
        id: new Date().getTime().toString(),
        name: input,
      };
      setItems([...items, newInputData]);
      setInput("");
    }
  };

  const addInput = (event) => {
    setInput(event.target.value);
  };

  // Delete item from list
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItems);
  };

  // Edit or Update item from the list
  const editItem = (index) => {
    const editedItem = items.find((curElem) => {
      return curElem.id === index;
    });
    setInput(editedItem.name);
    setEditItems(index);
    setToggleButton(true);
  };

  // Clear the list
  const clearAll = () => {
    setItems([]);
  };

  return (
    <>
      <div className="container">
        <div className="child-container">
          <figure>
            <img
              src="data:image/png;base64,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"
              alt="logo"
            />
            <h2>TO-DO LIST</h2>
            <figcaption>Add your list here 🙂</figcaption>
          </figure>
          <div className="input-field">
            <input
              type="text"
              placeholder="✍ Add items..."
              className="input-items"
              onChange={addInput}
              value={input}
            />
            {toggleButton ? (
              <i className="fas fa-edit" onClick={addItem} />
            ) : (
              <i className="fa fa-plus" onClick={addItem} />
            )}
            <span className="border-bottom"></span>
          </div>
          <div className="add-items">
            {items.map((curElem) => {
              return (
                <div className="each-item" key={curElem.id}>
                  <h3>{curElem.name} </h3>
                  <div className="btn">
                    <i
                      className="fas fa-edit"
                      onClick={() => editItem(curElem.id)}
                    ></i>
                    <i
                      className="fas fa-trash-alt"
                      onClick={() => deleteItem(curElem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="clear-btn">
            <button className="btn2" onClick={clearAll}>
              CLEAR LIST
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
