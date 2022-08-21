import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  /* 
  Another option to update the state
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  })

  setUserInput({
    ...userInput,
    title: 'new title',
  })

  But if the state depends on the previous state,
  the correct wey is

  setUserInput ((prevState) => {
    return {
      ...prevState,
      title: 'new title',
    }
  })
  */

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      id: Math.random().toString(),
      title,
      amount: +amount,
      date: new Date(date),
    };

    setTitle("");
    setAmount("");
    setDate("");

    props.onAddExpense(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
