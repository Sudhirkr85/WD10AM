function Show({ items }) {
  if (items.length === 0) return <p>Loading...</p>;

  return (
    <div>
      {items.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
}

export default Show;
