import React from "react";

export default function PackingList({ items, handleDelete, togglePacked }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            togglePacked={togglePacked}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, handleDelete, togglePacked }) {
  return (
    <li>
      <span
        style={!item.packed ? {} : { textDecoration: "line-through" }}
        onClick={() => togglePacked(item.id)}
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}
