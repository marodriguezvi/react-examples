import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h3 className="expenses-list__fallback">Found no expenses</h3>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => {
        return <ExpenseItem data={item} key={item.id} />;
      })}
    </ul>
  );
  // {props.items.length === 0 && <p>No expenses found.</p>}
};

export default ExpensesList;
