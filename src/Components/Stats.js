function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const itemsAmount = items.length;
  const packedAmount = items.filter((item) => item.packed).length;
  const packedPersant = (packedAmount / itemsAmount).toFixed(2) * 100;
  return (
    <footer className="stats">
      <em>
        {packedPersant === 100
          ? "You got everything! Ready to go ✈️"
          : `👜 You have ${itemsAmount} items on your list, and you already packed ${packedAmount}(${packedPersant}%)`}
      </em>
    </footer>
  );
}

export default Stats;
