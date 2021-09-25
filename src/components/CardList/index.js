import React, { useState } from "react";
import "./index.css";

export const CardList = ({ cards }) => {
  const [totalCredit, setTotalCredit] = useState(0);

  return (
    <div className="card-list">
      <h3 className="card-list-title">Card List</h3>
      {cards.length === 0 ? (
        <div className="card-list-message">Please submit user data</div>
      ) : (
        <>
          <p>Total credit available: &#163;{totalCredit}</p>
          {cards.map((card) => (
            <div key={card.id} className="card">
              <h5>{card.title}</h5>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
