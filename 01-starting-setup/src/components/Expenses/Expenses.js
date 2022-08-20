import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2022");
  const filteredExpenses = props.items.filter((el) => {
    return el.date.getFullYear() === parseInt(selectedYear);
  });

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
}

export default Expenses;
