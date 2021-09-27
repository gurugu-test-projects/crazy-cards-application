import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { CardList } from "..";

const cards = [
  {
    id: 2,
    title: "Anywhere Card",
    apr: "33.9",
    balanceTransferOfferDuration: 0,
    purchaseOfferDuration: 0,
    credit: 300,
    selected: false,
  },
  {
    id: 1,
    title: "Student Life",
    apr: "18.9",
    balanceTransferOfferDuration: 0,
    purchaseOfferDuration: 6,
    credit: 1200,
    selected: false,
  },
  {
    id: 3,
    title: "Liquid Card",
    apr: "33.9",
    balanceTransferOfferDuration: 12,
    purchaseOfferDuration: 6,
    credit: 3000,
    selected: false,
  },
];

describe("CardList", () => {
  test("should show a 'Please submit user data' text when no user data was submitted", () => {
    render(<CardList cards={[]} onSetCards={() => {}} />);

    const emptyListText = screen.getByText(/please submit user data/i);

    expect(emptyListText).toBeInTheDocument();
  });

  test("should show 1 card if 1 card is eligible", () => {
    render(<CardList cards={[cards[0]]} onSetCards={() => {}} />);

    const shownCards = screen.getAllByTestId("eligible-card");

    expect(shownCards).toHaveLength(1);
    expect(shownCards[0]).toHaveTextContent("Anywhere Card");
  });

  test("should show 3 cards if 3 cards are eligible", () => {
    render(<CardList cards={cards} onSetCards={() => {}} />);

    const shownCards = screen.getAllByTestId("eligible-card");

    expect(shownCards).toHaveLength(3);
  });
});
