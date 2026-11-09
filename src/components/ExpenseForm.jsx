import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !amount || !category) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount,
      category,
    };

    onAddExpense(newExpense);

    setTitle("");
    setAmount("");
    setCategory("");
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h3>Add A New Expense</h3>

      <label htmlFor="title">Expense Title</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="E.g Groceries"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="amount">Amount ($) </label>
      <input
        type="number"
        id="amount"
        name="amount"
        min="0"
        onkeydown="if(event.key === '-') {event.preventDefault();}"
        step="1"
        placeholder="0.00"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        required
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        className="modern-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select a category</option>
        <option value="Food">Food</option>
        <option value="Utilities">Utilities</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Housing">Housing</option>
        <option value="Others">Others</option>
      </select>

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
