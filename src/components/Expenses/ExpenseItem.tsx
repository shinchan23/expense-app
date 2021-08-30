import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

interface expenseItemProp {
  expenseProp: { id: string; title: string; amount: number; date: Date };
}

const ExpenseItem: React.FC<expenseItemProp> = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseProp.date} />
      <div className="expense-item__description">
        <h2>{props.expenseProp.title}</h2>
        <div className="expense-item__price">${props.expenseProp.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
