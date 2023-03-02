import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const addExpense = (formData) => {
    const expense = { ...formData, id: Math.random.toString() };
    props.onAddExpense(expense);
    setIsEditing();
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onStopEditing={stopEditingHandler}
          onAddExpense={addExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
