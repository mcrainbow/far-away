import React from "react";

export default function Stats({ items }) {
  const packed = items.filter((item) => item.packed === true);

  return (
    <footer className="stats">
      <em>
        💼You have {items.length} on your list, and you already packed{" "}
        {packed.length} ({(packed.length / items.length).toFixed(2) * 100}%)
      </em>
    </footer>
  );
}
