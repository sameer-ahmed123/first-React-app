import { useState } from "react";

interface ListGroupProps {
  items: string[];
  title: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, title, onSelectItem }: ListGroupProps) {
  // items = []
  // let selectedIndex = 4;
  const [selectedIndex, setSelectedindex] = useState(-1);

  return (
    <>
      <h1>{title}</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
            onClick={() => {
              setSelectedindex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
