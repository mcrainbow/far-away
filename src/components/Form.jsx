import React, { useState } from "react";

export default function Form({ setItems }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = {
      id: Date.now(),
      description: name,
      quantity,
      packed: false,
    };

    setItems((prev) => [...prev, newItem]);

    setName("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={name}
        type="text"
        placeholder="Item..."
        onChange={(e) => setName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
