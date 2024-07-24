import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charge", quantity: 2, packed: true },
  ]);

  function handleDelete(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function handleTogglePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleAdd(description, quantity) {
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    setItems((prev) => [...prev, newItem]);
  }

  function handleClear() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAdd={handleAdd} />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        togglePacked={handleTogglePacked}
        handleClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
