import React from "react";
import Item from "./Item";

const ItemList = ({ items, onDelete }) => {
  return (
    <div className="item-list">
      <h2>Component List</h2>
      {items.length > 0 ? (
        items.map((item) => <Item key={item.id} item={item} onDelete={onDelete} />)
      ) : (
        <p>No components available</p>
      )}
    </div>
  );
};

export default ItemList;
