import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const onClickHandler = () => {
    setAddNewExpense(true);
  };

  const onAddExpenseHandler = (data) => {
    props.onAddExpense(data);
    setAddNewExpense(false);
  };

  return (
    <div className="new-expense">
      {addNewExpense ? (
        <ExpenseForm onAddExpense={onAddExpenseHandler} />
      ) : (
        <button onClick={onClickHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
