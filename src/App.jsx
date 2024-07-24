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

  function togglePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        togglePacked={togglePacked}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
