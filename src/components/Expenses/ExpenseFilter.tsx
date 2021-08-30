import React, { ChangeEvent } from "react";
import "./ExpenseFilter.css";

interface PropData {
  onChangeSelect: Function;
  selected: number;
}
const ExpenseFilter: React.FC<PropData> = (props) => {
  const onSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onChangeSelect(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="expenses-filter label">Filter by year</label>
        <select
          value={props.selected}
          className="expenses-filter select"
          onChange={onSelectHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
