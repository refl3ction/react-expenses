import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const titleChangeHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };
  const dateChangeHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpense = {
      title: formData.title,
      amount: +formData.amount,
      date: new Date(formData.date),
    };
    props.onAddExpense(newExpense);
    setFormData({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={formData.amount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onStopEditing}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
