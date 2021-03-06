import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./index.css";
import cardList from "../../data/cardList.json";

const schema = yup
  .object({
    title: yup.string(),
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    birthdate: yup.string().required("Required"),
    housenumber: yup.string().required("Required"),
    postcode: yup.string().required("Required"),
    employment: yup.string(),
    income: yup.string().required("Required"),
  })
  .required();

export const UserForm = ({ onSetCards }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    const eligibleCards = cardList
      .filter((card) => {
        if (Object.keys(card.req).length === 0) {
          return true;
        } else {
          return Object.keys(card.req).every((req) => {
            if (req === "income") {
              return data.income > card.req.income;
            }

            if (req === "employment") {
              return card.req.employment.includes(data.employment);
            }

            return false;
          });
        }
      })
      .map((card) => ({ ...card.data, id: card.id, selected: false }));

    onSetCards(eligibleCards);
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      // reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="user-form">
      <h3 className="user-form-title">User Form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <select id="title" {...register("title")}>
            <option value="Mr.">Mr.</option>
            <option value="Miss">Miss</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">* First name: </label>
          <input
            id="firstName"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <p className="error-message">{errors.firstName.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">* Last name:</label>
          <input id="lastName" {...register("lastName", { required: true })} />
          {errors.lastName && (
            <p className="error-message">{errors.lastName.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="birthdate">* Date of birth:</label>
          <input
            id="birthdate"
            type="date"
            {...register("birthdate", { required: true })}
          />
          {errors.birthdate && (
            <p className="error-message">{errors.birthdate.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="housenumber">* House number:</label>
          <input
            id="housenumber"
            {...register("housenumber", { required: true })}
          />
          {errors.housenumber && (
            <p className="error-message">{errors.housenumber.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="postcode">* Postcode:</label>
          <input id="postcode" {...register("postcode", { required: true })} />
          {errors.postcode && (
            <p className="error-message">{errors.postcode.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="employment">Employment status:</label>
          <select id="employment" {...register("employment")}>
            <option value="fulltime">Full time</option>
            <option value="parttime">Part time</option>
            <option value="student">Student</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="income">* Annual income:</label>
          <input
            id="income"
            {...register("income", { required: true })}
            type="number"
            min="0"
          />
          {errors.income && (
            <p className="error-message">{errors.income.message}</p>
          )}
        </div>
        <input data-testid="submit-btn" type="submit" />
      </form>
    </div>
  );
};
