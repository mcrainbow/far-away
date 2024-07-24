import React from "react";

export default function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item, i) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={!item.packed ? {} : { textDecoration: "line-through" }}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
