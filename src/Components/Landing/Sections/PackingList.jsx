import PropTypes from "prop-types";
import PackingItem from "./PackingItem";
import { useState } from "react";
function PackingList({ items, onPacking, onCancel, onClear }) {
  const [sortBy, setSortBy] = useState("date");

  let sortedItems;

  switch (sortBy) {
    case "date":
      sortedItems = items;
      break;
    case "desc":
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;

    case "packed":
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <PackingItem
            item={item}
            key={item.id}
            onPacking={onPacking}
            onCancel={onCancel}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          name="sort"
          id="sort"
          title="sort"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="date">SORT BY INPUT ORDER</option>
          <option value="desc">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={onClear}>CLEAR LIST</button>
      </div>
    </div>
  );
}

PackingList.propTypes = {
  items: PropTypes.array,
  onPacking: PropTypes.func,
  onCancel: PropTypes.func,
  onClear: PropTypes.func,
};
export default PackingList;
