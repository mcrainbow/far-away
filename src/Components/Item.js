function Item({ item, onDeleteItem, onToggleItem }) {
  const handleDelete = (id) => {
    onDeleteItem(id);
  };

  const handlerCheckbox = (id) => {
    onToggleItem(id);
  };

  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handlerCheckbox(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}

export default Item;
