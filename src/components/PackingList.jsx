import React, { useState } from "react";

export default function PackingList({
  items,
  handleDelete,
  togglePacked,
  handleClear,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedList;

  if (sortBy === "input") sortedList = items;

  if (sortBy === "description")
    sortedList = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedList = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            togglePacked={togglePacked}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClear}>Clear list</button>
      </div>
    </div>
  );
}
``;

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
