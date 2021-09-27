import React from "react";
import { render, act, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { UserForm } from "..";

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

describe("UserForm", () => {
  test("should not run setCards function when First name field is empty", async () => {
    const promise = Promise.resolve();
    const handleSetCards = jest.fn(() => promise);

    render(<UserForm onSetCards={handleSetCards} />);

    const titleInput = screen.getByLabelText(/title/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const birthDateInput = screen.getByLabelText(/date of birth/i);
    const houseNumberInput = screen.getByLabelText(/house number/i);
    const postCodeInput = screen.getByLabelText(/postcode/i);
    const annualIncomeInput = screen.getByLabelText(/annual income/i);
    const employmentInput = screen.getByLabelText(/employment/i);

    user.selectOptions(titleInput, "Mr.");
    user.type(lastNameInput, "Rogers");
    user.type(birthDateInput, "2021-08-30");
    user.type(houseNumberInput, "123");
    user.type(postCodeInput, "123");
    user.type(annualIncomeInput, "123");
    user.selectOptions(employmentInput, "fulltime");
    user.click(screen.getByTestId(/submit-btn/i));

    expect(handleSetCards).not.toHaveBeenCalled();
    await act(() => promise);
  });

  test("should not run setCards function when Last name field is empty", async () => {
    const promise = Promise.resolve();
    const handleSetCards = jest.fn(() => promise);

    render(<UserForm onSetCards={handleSetCards} />);

    const titleInput = screen.getByLabelText(/title/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const birthDateInput = screen.getByLabelText(/date of birth/i);
    const houseNumberInput = screen.getByLabelText(/house number/i);
    const postCodeInput = screen.getByLabelText(/postcode/i);
    const annualIncomeInput = screen.getByLabelText(/annual income/i);
    const employmentInput = screen.getByLabelText(/employment/i);

    user.selectOptions(titleInput, "Mr.");
    user.type(lastNameInput, "Rogers");
    user.type(birthDateInput, "2021-08-30");
    user.type(houseNumberInput, "123");
    user.type(postCodeInput, "123");
    user.type(annualIncomeInput, "123");
    user.selectOptions(employmentInput, "fulltime");
    user.click(screen.getByTestId(/submit-btn/i));

    expect(handleSetCards).not.toHaveBeenCalled();
    await act(() => promise);
  });

  test("should not run setCards function when Birth date field is empty", async () => {
    const promise = Promise.resolve();
    const handleSetCards = jest.fn(() => promise);

    render(<UserForm onSetCards={handleSetCards} />);

    const titleInput = screen.getByLabelText(/title/i);
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const houseNumberInput = screen.getByLabelText(/house number/i);
    const postCodeInput = screen.getByLabelText(/postcode/i);
    const annualIncomeInput = screen.getByLabelText(/annual income/i);
    const employmentInput = screen.getByLabelText(/employment/i);

    user.selectOptions(titleInput, "Mr.");
    user.type(firstNameInput, "Buck");
    user.type(lastNameInput, "Rogers");
    user.type(houseNumberInput, "123");
    user.type(postCodeInput, "123");
    user.type(annualIncomeInput, "123");
    user.selectOptions(employmentInput, "fulltime");
    user.click(screen.getByTestId(/submit-btn/i));

    expect(handleSetCards).not.toHaveBeenCalled();
    await act(() => promise);
  });

  test("should not run setCards function when House number field is empty", async () => {
    const promise = Promise.resolve();
    const handleSetCards = jest.fn(() => promise);
    const eligibleCards = cards[0];

    render(<UserForm onSetCards={handleSetCards} />);

    const titleInput = screen.getByLabelText(/title/i);
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const birthDateInput = screen.getByLabelText(/date of birth/i);
    const postCodeInput = screen.getByLabelText(/postcode/i);
    const annualIncomeInput = screen.getByLabelText(/annual income/i);
    const employmentInput = screen.getByLabelText(/employment/i);

    user.selectOptions(titleInput, "Mr.");
    user.type(firstNameInput, "Buck");
    user.type(lastNameInput, "Rogers");
    user.type(birthDateInput, "08/30/2021");
    user.type(postCodeInput, "123");
    user.selectOptions(employmentInput, "fulltime");
    user.type(annualIncomeInput, "123");

    user.click(screen.getByTestId(/submit-btn/i));

    expect(handleSetCards).not.toHaveBeenCalledWith(eligibleCards);
    await act(() => promise);
  });

  test.skip("calls setCards when all user data is filled in", async () => {
    const promise = Promise.resolve();
    const handleSetCards = jest.fn(() => promise);
    const eligibleCards = cards[0];

    render(<UserForm onSetCards={handleSetCards} />);

    const titleInput = screen.getByLabelText(/title/i);
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const birthDateInput = screen.getByLabelText(/date of birth/i);
    const houseNumberInput = screen.getByLabelText(/house number/i);
    const postCodeInput = screen.getByLabelText(/postcode/i);
    const annualIncomeInput = screen.getByLabelText(/annual income/i);
    const employmentInput = screen.getByLabelText(/employment/i);

    user.selectOptions(titleInput, "Mr.");
    user.type(firstNameInput, "Buck");
    user.type(lastNameInput, "Rogers");
    user.type(birthDateInput, "08/30/2021");
    user.type(houseNumberInput, "123");
    user.type(postCodeInput, "123");
    user.selectOptions(employmentInput, "fulltime");
    user.type(annualIncomeInput, "123");

    user.click(screen.getByTestId(/submit-btn/i));

    expect(handleSetCards).toHaveBeenCalledWith(eligibleCards);
    await act(() => promise);
  });
});
