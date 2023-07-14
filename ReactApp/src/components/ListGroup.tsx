function ListGroup() {
  let items = ["New York", "Jeddah", "Rawalpindi", "Dubai", "Londen"];
    // items = []
  

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No Items Found</p>: null}
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
