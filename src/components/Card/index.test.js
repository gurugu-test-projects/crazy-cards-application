import React from "react";
import { render, act, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Card } from "..";

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

describe("Card", () => {
  test.skip("should run handleSelectCard with ID '2' when Anywhere card is selected", async () => {
    const promise = Promise.resolve();
    const selectCard = jest.fn(() => promise);
    render(<Card card={cards[0]} onSetCards={selectCard} />);

    const shownCards = screen.getByTestId("eligible-card");

    user.click(shownCards);

    expect(selectCard).toHaveBeenCalledTimes(1);
    expect(selectCard).toHaveBeenCalledWith(2);
    await act(() => promise);
  });
});
