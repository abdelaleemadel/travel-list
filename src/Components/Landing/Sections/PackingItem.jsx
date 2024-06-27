import PropTypes from "prop-types";

function PackingItem({ item, onPacking, onCancel }) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => {
            onPacking(item.id);
          }}
        />

        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onCancel(item.id)}>❌</button>
      </li>
    </>
  );
}

PackingItem.propTypes = {
  item: PropTypes.object,
  onPacking: PropTypes.func,
  onCancel: PropTypes.func,
};
export default PackingItem;
