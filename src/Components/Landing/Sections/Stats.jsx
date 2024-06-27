import PropTypes from "prop-types";
function Stats({ items }) {
  const itemsNumber = items.length;
  const packedNumber = items.reduce((number, item) => {
    return item.packed ? ++number : number;
  }, 0);
  return (
    <div className="stats">
      <p>
        💼 You have {itemsNumber} items on your list, and you already packed{" "}
        {packedNumber} ({Math.round((packedNumber * 100) / itemsNumber) || 0}%)
      </p>
    </div>
  );
}
Stats.propTypes = {
  items: PropTypes.array,
};
export default Stats;
