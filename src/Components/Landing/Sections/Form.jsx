import { useState } from "react";
import PropTypes from "prop-types";

function Form({ onAddItem }) {
  const [packingItem, setPackingItem] = useState("");
  const [piecesNumber, setPiecesNumber] = useState(1);

  function handleAddItem() {
    onAddItem({
      id: Date.now(),
      description: packingItem,
      quantity: piecesNumber,
      packed: false,
    });

    setPackingItem("");
    setPiecesNumber(1);
  }
  return (
    <>
      <form
        className="add-form"
        onSubmit={(event) => {
          event.preventDefault();
          handleAddItem();
        }}
      >
        <h3>What do you need for your trip 😍</h3>
        <select
          name="items-no"
          title="number-of-items"
          value={piecesNumber}
          onChange={(input) => setPiecesNumber(input.target.value)}
          id="items-no"
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item"
          value={packingItem}
          onChange={(input) => setPackingItem(input.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

Form.propTypes = {
  onAddItem: PropTypes.func,
};
export default Form;
