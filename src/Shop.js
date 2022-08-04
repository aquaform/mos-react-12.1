import React, { useState } from "react";
import Item from "./Item.js";
import "./index.css";

export default function Shop() {
  const [items, setItems] = useState([]);

  return (
    <div className="shop">
      {/* Лоадер-сообщение */}
      {items.map((item) => (
        <Item key={item.id} info={item} />
      ))}
    </div>
  );
}
