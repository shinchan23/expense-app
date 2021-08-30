import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

interface ExpensesProp {
  expenses: { id: string; title: string; amount: number; date: Date }[];
}

const Expenses: React.FC<ExpensesProp> = (props) => {
  const [filteredYear, setFilteredYear] = useState(2019);

  const selectChangeHandler = (year: number) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter((x) => {
    console.log(+filteredYear + +1);
    return +x.date.getFullYear() === +filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeSelect={selectChangeHandler}
      />
      <ExpensesList filteredItems={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
