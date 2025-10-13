function Show({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} style={{ width: "18rem", border: "2px solid" }}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Show;
