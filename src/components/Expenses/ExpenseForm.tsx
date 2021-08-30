import React, {
  ChangeEvent,
  FormEvent,
  MouseEventHandler,
  useState,
} from "react";
import "./ExpenseForm.css";

interface PropsData {
  onSaveExpense: Function;
  onCancel: MouseEventHandler;
}
interface InputExpenseData {
  title: string;
  amount: number;
  date: string;
}
const ExpenseForm: React.FC<PropsData> = (props) => {
  const [inputValues, setInputValues] = useState<InputExpenseData>({
    title: "",
    amount: 0,
    date: "",
  });

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValues((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValues((prevState) => {
      return { ...prevState, amount: +event.target.value };
    });
  };

  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValues((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const expenseData: InputExpenseData = {
      title: inputValues.title,
      amount: inputValues.amount,
      date: inputValues.date,
    };
    props.onSaveExpense(expenseData);
    setInputValues({
      title: "",
      amount: 0,
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
            value={inputValues.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={inputValues.amount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <input
            value={inputValues.date}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
