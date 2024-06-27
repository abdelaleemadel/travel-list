import { useState } from "react";
import Form from "./Sections/Form";
import Logo from "./Sections/Logo";
import PackingList from "./Sections/PackingList";
import Stats from "./Sections/Stats";

function Landing() {
  const [items, setItems] = useState([]);
  function handleAddItem(newItem) {
    newItem.description && setItems((items) => [...items, newItem]);
  }

  function handlePacking(id) {
    setItems(
      items.map((item) => {
        if (item.id == id) item.packed = !item.packed;
        return item;
      })
    );
  }

  function cancelItem(id) {
    setItems(items.filter((item) => item.id != id));
  }
  function clearList() {
    setItems([]);
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItem={handleAddItem} />
        <PackingList
          items={items}
          onPacking={handlePacking}
          onCancel={cancelItem}
          onClear={clearList}
        />
        <Stats items={items} />
      </div>
    </>
  );
}

export default Landing;
