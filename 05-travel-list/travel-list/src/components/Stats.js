export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>Add some items to your packing list</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const pctPacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {pctPacked === 100
          ? "You got everything ready to go ✈️"
          : `You have ${numItems} items on your list and you allready have packed
        ${numPacked} (${pctPacked}%)`}
      </em>
    </footer>
  );
}
