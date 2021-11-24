import React, { useState } from "react";

import "./Home.css";
import { adultMatchups, kidMatchups } from "./Home.helper";

export default function App() {
  const [listSelected, setListSelected] = useState("adults");

  return (
    <div className="App">
      <div className="list-header">Christmas Assignments</div>
      <div className="list-select">
        <button onClick={() => setListSelected("adults")}>Adults</button>
        <button onClick={() => setListSelected("kids")}>Kids</button>
      </div>
      <div className="list">
        {(listSelected === "adults" ? adultMatchups : kidMatchups).map(
          (obj) => (
            <div className="list-item">
              <img
                src={obj.giveFrom.img}
                alt={obj.giveFrom.name}
                height="100"
                width="100"
              />
              <span
                style={{ fontSize: "40px" }}
                role="img"
                aria-label="gives gift to"
              >
                🎁 →
              </span>
              <img
                src={obj.giveTo.img}
                alt={obj.giveTo.name}
                height="100"
                width="100"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
