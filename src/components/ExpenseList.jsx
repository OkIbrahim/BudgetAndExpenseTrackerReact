import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="expense-list">
      <div className="list-header">
        <h3>Current Expenses</h3>
        <select name="list-category" id="list-category" className="list-select">
          <option value="">All categories</option>
          <option value="Food">Food</option>
          <option value="Utilities">Utilities</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Housing">Housing</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="list">
        <ul>
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              onDeleteExpense={onDeleteExpense}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpenseList;
