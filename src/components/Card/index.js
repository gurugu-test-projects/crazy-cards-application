import React from "react";
import classNames from "classnames";
import "./index.css";

export const Card = ({ card, handleSelectCard }) => {
  return (
    <div
      className={classNames("card", {
        selected: card.selected,
      })}
      onClick={() => handleSelectCard(card.id)}
    >
      <h5>{card.title}</h5>
      {card.selected && (
        <div>
          <p>
            Apr: <b>{card.apr}%</b>
          </p>
          <p>
            Balance Transfer Offer Duration:{" "}
            <b>{card.balanceTransferOfferDuration} months</b>
          </p>
          <p>
            Purchase Offer Duration: <b>{card.purchaseOfferDuration} months</b>
          </p>
          <p>
            Credit Available: <b>&#163;{card.credit}</b>
          </p>
        </div>
      )}
    </div>
  );
};
