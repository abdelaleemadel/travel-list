import PropTypes from "prop-types";

function PackingItem({ item, onPacking, onCancel }) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onClick={() => {
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
