import React, { useState } from "react";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");

  const yearChangeHandler = (event) => {
    console.log("Selected year", event.target.value);
    setYearFilter(event.target.value);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={yearFilter}
        onYearChange={yearChangeHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
