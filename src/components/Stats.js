export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const packs = items.filter((item) => item.packed);
  const percent = ((packs.length * 100) / items.length).toFixed(0);

  return (
    <footer className="stats">
      {+percent === 100 ? (
        <em> You got everything! Ready to go ✈️</em>
      ) : (
        <em>
          😍 You have {items.length} items on your list, and you already packed{" "}
          {packs.length} ({percent}%)
        </em>
      )}
    </footer>
  );
}
