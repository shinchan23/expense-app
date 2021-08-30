import React from "react";
import { useState } from "react";
import ExpenseForm from "../ExpenseForm";
import "./NewExpense.css";

interface InputExpenseData {
  title: string;
  amount: number;
  date: Date;
}

interface PropData {
  onAddExpense: Function;
}
const NewExpense: React.FC<PropData> = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const saveExpenseHandler = (inputExpenseData: InputExpenseData) => {
    const newExpenseData = {
      ...inputExpenseData,
      date: new Date(inputExpenseData.date),
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseData);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
