import React, { useState } from "react";
import Lists from "./Lists";

export default function App() {
  const [items, setItems] = useState(Lists);

  return (
    <div className="container">
      <h1>5 birthdays today</h1>
      {items.map((item) => (
        <div className="birthday">
          <img src={item.imgUrl} alt={item.name} />
          <div className="hp">
            <p>
              <b>{item.name}</b>
            </p>
            <p>{item.years}</p>
          </div>
        </div>
      ))}
      <button onClick={() => setItems([])}>Clear all</button>
    </div>
  );
}
