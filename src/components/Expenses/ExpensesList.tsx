import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

interface PropData {
  filteredItems:
    | { id: string; title: string; amount: number; date: Date }[]
    | undefined;
}

const ExpensesList: React.FC<PropData> = (props) => {
  if (props.filteredItems?.length === 0) {
    return <h2 className="expenses-list__fallback"> Found No Expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredItems?.map((expense) => (
        <ExpenseItem key={expense.id} expenseProp={expense} />
      ))}
    </ul>
  );
};

export default ExpensesList;
