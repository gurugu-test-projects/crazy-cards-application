import React, { useState, useEffect } from "react";

import { Card } from "..";
import "./index.css";

const calculateTotalCredit = (cards) =>
  cards.reduce((total, card) => {
    if (card.selected) {
      return total + card.credit;
    }
    return total;
  }, 0);

export const CardList = ({ cards, onSetCards }) => {
  const [totalCredit, setTotalCredit] = useState(0);

  useEffect(() => {
    const totalCredit = calculateTotalCredit(cards);
    setTotalCredit(totalCredit);
  }, [cards]);

  const handleSelectCard = (cardId) => {
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        return { ...card, selected: !card.selected };
      }
      return card;
    });
    // const totalCredit = updatedCards.reduce((total, card) => {
    //   if (card.selected) {
    //     return total + card.credit;
    //   }
    //   return total;
    // }, 0);

    onSetCards(updatedCards);
    // setTotalCredit(totalCredit);
  };

  return (
    <div className="card-list">
      <h3 className="card-list-title">Card List</h3>
      {cards.length === 0 ? (
        <div className="card-list-message">Please submit user data</div>
      ) : (
        <>
          <p>
            <b>Total credit available: &#163;{totalCredit}</b>
          </p>
          <div>
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                handleSelectCard={handleSelectCard}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
