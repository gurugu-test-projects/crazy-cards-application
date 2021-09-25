import React, { useState } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./index.css";

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

export const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <div className="user-form">
      <h3 className="user-form-title">User Form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <select {...register("title")}>
            <option value="Mr.">Mr.</option>
            <option value="Miss">Miss</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First name: </label>
          <input {...register("firstName", { required: true })} />
          {errors.firstName && (
            <p className="error-message">{errors.firstName.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name:</label>
          <input {...register("lastName", { required: true })} />
          {errors.lastName && (
            <p className="error-message">{errors.lastName.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="birthdate">Date of birth:</label>
          <input type="date" {...register("birthdate", { required: true })} />
          {errors.birthdate && (
            <p className="error-message">{errors.birthdate.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="housenumber">House number:</label>
          <input {...register("housenumber", { required: true })} />
          {errors.housenumber && (
            <p className="error-message">{errors.housenumber.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="postcode">Postcode:</label>
          <input {...register("postcode", { required: true })} />
          {errors.postcode && (
            <p className="error-message">{errors.postcode.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="employment">Employment status:</label>
          <select {...register("employment")}>
            <option value="fulltime">Full time</option>
            <option value="parttime">Part time</option>
            <option value="student">Student</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="income">Annual income:</label>
          <input
            {...register("income", { required: true })}
            type="number"
            min="0"
          />
          {errors.income && (
            <p className="error-message">{errors.income.message}</p>
          )}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
